import type { Search } from './search';

export type FilterParams = {
  readonly search?: Search;
};

export type Filtered<T> = T & {
  readonly search?: Search;
};

export const filtered = <T>(result: T, params: FilterParams = {}): Filtered<T> => ({
  ...result,
  ...(params.search != null ? { search: params.search } : {})
});
