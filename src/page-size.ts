export type PageSize = number & { readonly __brand: 'PageSize' };

export const PageSize = (value: number): PageSize => Math.max(1, Math.round(value)) as PageSize;
