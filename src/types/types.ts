export type FilterType = {
    sort: string;
    query: string;
    perPage: string;
};
export type UserType = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    suspended_at?: string;
};

export type PagesType = {
    currentPage: number;
    totalPages: number;
};
