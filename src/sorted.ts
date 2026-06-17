import type { Sort } from './sort';

export type SortParams<Field extends string = string> = {
  readonly sort?: Sort<Field>;
};

export type Sorted<T, Field extends string = string> = T & {
  readonly sort?: Sort<Field>;
};

export const sorted = <T, Field extends string = string>(result: T, params: SortParams<Field> = {}): Sorted<T, Field> => ({
  ...result,
  ...(params.sort != null ? { sort: params.sort } : {})
});
