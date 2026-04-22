import 'server-only';

import {
    EDT_API_BASE_URL,
    getEdtApiHeaders,
    requireEdtAccessToken,
} from '@/app/lib/edt-auth';

const DEFAULT_LOCATION = process.env.EDT_DEFAULT_LOCATION ?? '27177';

type EdtTranslation = {
    description?: string;
    title?: string;
};

export type EdtEvent = {
    address?: {
        addressLocality?: string;
        addressPlace?: string;
        streetAddress?: string;
    };
    contacts?: {
        telephone?: string;
    };
    dates?: {
        startDate?: string;
    };
    translations?: {
        it?: EdtTranslation;
    };
};

export type EdtEventsResponse = {
    events: EdtEvent[];
};

async function fetchEdtJson<T>(path: string, accessToken: string): Promise<T> {
    const response = await fetch(`${EDT_API_BASE_URL}${path}`, {
        cache: 'no-store',
        headers: getEdtApiHeaders(accessToken),
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`EDT API request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
}

export async function getEvents(returnTo: string, location = DEFAULT_LOCATION) {
    const accessToken = await requireEdtAccessToken(returnTo);

    return fetchEdtJson<EdtEventsResponse>(
        `/event?locations=${encodeURIComponent(location)}`,
        accessToken,
    );
}

export default getEvents;
