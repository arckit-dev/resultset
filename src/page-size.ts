import { defineModel, type Model } from '@arckit/effect';
import { brand, greaterThanOrEqualTo, int, Number as SchemaNumber } from 'effect/Schema';

export const PageSize = defineModel(SchemaNumber.pipe(int(), greaterThanOrEqualTo(1), brand('PageSize')), (value) =>
  Math.max(1, Math.round(value))
);
export type PageSize = Model.TypeOf<typeof PageSize>;
