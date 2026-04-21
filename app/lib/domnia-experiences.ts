import 'server-only';

import {
    DOMNIA_API_BASE_URL,
    getDomniaApiHeaders,
    requireDomniaAccessToken,
} from '@/app/lib/domnia-auth';
import type { ExperienceCardData } from '@/app/lib/domnia-types';

type ProductGroupResponse = {
    data: ExperienceCardData[];
};

type ProductResponse = {
    base_price?: {
        product_id?: number | string;
        value?: number;
    };
};

async function fetchDomniaJson<T>(path: string, accessToken: string): Promise<T> {
    const response = await fetch(`${DOMNIA_API_BASE_URL}${path}`, {
        cache: 'no-store',
        headers: getDomniaApiHeaders(accessToken),
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`Domnia API request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
}

function enrichExperiences(
    productGroups: ExperienceCardData[],
    products: ProductResponse[],
) {
    return productGroups.map((productGroup) => {
        const connectedProducts = new Set(
            (Array.isArray(productGroup.connectedProducts)
                ? productGroup.connectedProducts
                : []
            ).map((productId) => productId.toString()),
        );

        const cheapest = products.reduce<number | undefined>((lowest, product) => {
            const productId = product.base_price?.product_id;
            const value = product.base_price?.value;

            if (
                productId === undefined ||
                value === undefined ||
                !connectedProducts.has(productId.toString())
            ) {
                return lowest;
            }

            if (lowest === undefined || value < lowest) {
                return value;
            }

            return lowest;
        }, undefined);

        return {
            ...productGroup,
            cheapest,
        };
    });
}

export async function fetchExperiencesWithAccessToken(accessToken: string) {
    const [productGroups, products] = await Promise.all([
        fetchDomniaJson<ProductGroupResponse>(
            '/api/shop/product-groups',
            accessToken,
        ),
        fetchDomniaJson<ProductResponse[]>(
            '/api/bb/products/salable',
            accessToken,
        ),
    ]);

    return enrichExperiences(
        Array.isArray(productGroups.data) ? productGroups.data : [],
        Array.isArray(products) ? products : [],
    );
}

export async function getExperiences(returnTo: string) {
    const accessToken = await requireDomniaAccessToken(returnTo);

    return fetchExperiencesWithAccessToken(accessToken);
}
