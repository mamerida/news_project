

export interface FiltersForm {
    endpoint: string;
    q: string;
    excludeDomains: string;
    domains: string;
    from: string;
    to: string;
    language: string[];
    sortBy: string;
    country: string[];
    category: string[];
}

interface CommonParams {
    q: string;
}

export interface EverythingParams extends CommonParams {
    domains: string;
    excludeDomains: string;
    from: string;
    to: string;
    language: string[];
    sortBy: string;
}

export interface TopParams extends CommonParams {
    country: string[];
    category: string[];
}
