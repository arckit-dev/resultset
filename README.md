# @arckit/resultset

Pagination, filtering, and result set utilities with native branded types.

[![npm version](https://img.shields.io/npm/v/@arckit/resultset)](https://www.npmjs.com/package/@arckit/resultset)
[![npm downloads](https://img.shields.io/npm/dm/@arckit/resultset)](https://www.npmjs.com/package/@arckit/resultset)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@arckit/resultset)](https://bundlephobia.com/package/@arckit/resultset)
[![codecov](https://codecov.io/gh/arckit-dev/resultset/graph/badge.svg)](https://codecov.io/gh/arckit-dev/resultset)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 📑 Table of Contents

- 🪧 [About](#about)
- 📦 [Installation](#installation)
- 🚀 [Usage](#usage)
- 📖 [API](#api)
- 🤗 [Contributing](#contributing)
- 📝 [License](#license)

<h2 id="about">🪧 About</h2>

Type-safe pagination, filtering, and sorting utilities using native TypeScript branded types for `Page` and `PageSize`. Ensures values are always valid positive integers at the type level.

<h2 id="installation">📦 Installation</h2>

```bash
pnpm add @arckit/resultset
```

<h2 id="usage">🚀 Usage</h2>

### Pagination

```typescript
import { Page, PageSize, paginate } from '@arckit/resultset';

const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

const result = paginate(items, { page: Page(2), pageSize: PageSize(5) });
// { items: ['f', 'g', 'h', 'i', 'j'], totalItems: 11, currentPage: 2, pageSize: 5 }
```

### Filtering

```typescript
import { filtered, Search } from '@arckit/resultset';

const result = filtered(paginatedResult, { search: Search('hello') });
// Adds search metadata to the result
```

### Sorting

```typescript
import { Sort, sorted } from '@arckit/resultset';

const result = sorted(paginatedResult, { sort: Sort('name', 'desc') });
// Adds sort metadata to the result: { ..., sort: { field: 'name', direction: 'desc' } }
```

`Sort` carries the chosen field and direction; the actual ordering stays the
caller's responsibility (e.g. the database query). `Sort` is generic over the
field name, so it can be constrained to a known set of sortable columns:

```typescript
type ClientField = 'name' | 'createdAt';
const sort = Sort<ClientField>('createdAt', 'desc');
```

<h2 id="api">📖 API</h2>

### `Page(value: number) => Page`

Branded positive integer. Clamps to 1 minimum, rounds to nearest integer.

### `PageSize(value: number) => PageSize`

Branded positive integer. Clamps to 1 minimum, rounds to nearest integer.

### `paginate<T>(items: T[], params?) => Paginated<T>`

| Parameter         | Description                  |
|-------------------|------------------------------|
| `items`           | The full array to paginate   |
| `params.page`     | Page number (default: 1)     |
| `params.pageSize` | Items per page (default: 10) |

### `Search(value: string) => Search`

Branded search string. Wraps a raw string into the `Search` brand for use with `filtered`.

### `filtered<T>(result: T, params?) => Filtered<T>`

| Parameter       | Description                              |
|-----------------|------------------------------------------|
| `result`        | The result object to augment             |
| `params.search` | Optional `Search` to attach              |

### `SortDirection(value: string) => SortDirection`

Normalizes a raw value to `'asc' | 'desc'`. Defaults to `'asc'` for anything other than `'desc'`.

### `Sort<Field>(field: Field, direction?: SortDirection) => Sort<Field>`

Builds a sort instruction. `direction` defaults to `'asc'`. Generic over the field name to constrain sortable columns.

### `sorted<T, Field>(result: T, params?) => Sorted<T, Field>`

| Parameter     | Description                  |
|---------------|------------------------------|
| `result`      | The result object to augment |
| `params.sort` | Optional `Sort` to attach    |

<h2 id="contributing">🤗 Contributing</h2>

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

<h2 id="license">📝 License</h2>

[MIT](LICENSE) &copy; Marc Gavanier
