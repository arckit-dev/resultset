import { defineModel, type Model } from '@arckit/effect';
import { brand, greaterThanOrEqualTo, int, Number as SchemaNumber } from 'effect/Schema';

export const Page = defineModel(SchemaNumber.pipe(int(), greaterThanOrEqualTo(1), brand('Page')), (value) =>
  Math.max(1, Math.round(value))
);
export type Page = Model.TypeOf<typeof Page>;
