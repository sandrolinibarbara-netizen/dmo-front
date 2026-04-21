export type ExperienceCardData = {
    cheapest?: number;
    connectedProducts?: Array<number | string>;
    description?: Array<{
        children?: Array<{
            text?: string;
        }>;
    }>;
    documentId?: string;
    slug?: string;
    tagIds?: number[];
    title?: string;
    tipo?: string;
    [key: string]: unknown;
};
