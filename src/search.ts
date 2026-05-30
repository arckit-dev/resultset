export type Search = string & { readonly __brand: 'Search' };

export const Search = (value: string): Search => value as Search;
