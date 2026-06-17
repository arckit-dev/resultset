export type SortDirection = 'asc' | 'desc';

export const SortDirection = (value: string): SortDirection => (value === 'desc' ? 'desc' : 'asc');
