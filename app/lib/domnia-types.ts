export type ExperienceCardData = {
    cheapest?: number;
    connectedProducts?: Array<number | string>;
    description?: Array<{
        children?: Array<{
            text?: string;
        }>;
    }>;
    documentId?: string;
    locations?: ExperienceLocation[];
    slug?: string;
    tagIds?: number[];
    title?: string;
    tipo?: string;
    [key: string]: unknown;
};

export type ExperienceLocation = {
    address?: string;
    addressLocality?: string;
    indirizzo?: string;
    lat?: number;
    latitude?: number;
    lng?: number;
    longitude?: number;
    name?: string;
    nome?: string;
    streetAddress?: string;
    title?: string;
    [key: string]: unknown;
};

export type ProductResponse = {
    base_price?: {
        end_date?: string;
        product_id?: number | string;
        start_date?: string;
        value?: number;
    };
};
