export type MessageProps = {
    message?: string | number | null;
}

export type SearchBarProps = {
    onSearch?: (term: string) => void;
    searchTerm?: string;
};

export type SearchParamType = {
    symbol: string
}