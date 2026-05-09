import { defineModel, type Model } from '@arckit/effect';
import { brand, String as SchemaString } from 'effect/Schema';

export const Search = defineModel(SchemaString.pipe(brand('Search')));
export type Search = Model.TypeOf<typeof Search>;
