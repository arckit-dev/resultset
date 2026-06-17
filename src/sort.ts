import type { SortDirection } from './sort-direction';

export type Sort<Field extends string = string> = {
  readonly field: Field;
  readonly direction: SortDirection;
};

export const Sort = <Field extends string = string>(field: Field, direction: SortDirection = 'asc'): Sort<Field> => ({
  field,
  direction
});
