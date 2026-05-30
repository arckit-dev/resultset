export type Page = number & { readonly __brand: 'Page' };

export const Page = (value: number): Page => Math.max(1, Math.round(value)) as Page;
