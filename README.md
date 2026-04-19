# @arckit/resultset

Pagination, filtering, and result set utilities with Effect Schema branded types.

[![npm version](https://img.shields.io/npm/v/@arckit/resultset)](https://www.npmjs.com/package/@arckit/resultset)
[![npm downloads](https://img.shields.io/npm/dm/@arckit/resultset)](https://www.npmjs.com/package/@arckit/resultset)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@arckit/resultset)](https://bundlephobia.com/package/@arckit/resultset)
[![codecov](https://codecov.io/gh/arckit-dev/resultset/graph/badge.svg)](https://codecov.io/gh/arckit-dev/resultset)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Effect](https://img.shields.io/badge/Effect-3-black)](https://effect.website/)

## 📑 Table of Contents

- 🪧 [About](#about)
- 📦 [Installation](#installation)
- 🚀 [Usage](#usage)
- 📖 [API](#api)
- 🤗 [Contributing](#contributing)
- 📝 [License](#license)

<h2 id="about">🪧 About</h2>

Type-safe pagination and filtering utilities using [Effect Schema](https://effect.website/docs/schema/introduction) branded types for `Page` and `PageSize`. Ensures values are always valid positive integers at the type level.

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
import { filtered } from '@arckit/resultset';

const result = filtered(paginatedResult, { search: 'hello' });
// Adds search metadata to the result
```

<h2 id="api">📖 API</h2>

### `Page(value: number) => Page`

Branded positive integer. Clamps to 1 minimum, rounds to nearest integer.

### `PageSize(value: number) => PageSize`

Branded positive integer. Clamps to 1 minimum, rounds to nearest integer.

### `paginate<T>(items: T[], params?) => Paginated<T>`

| Parameter | Description |
|-----------|-------------|
| `items` | The full array to paginate |
| `params.page` | Page number (default: 1) |
| `params.pageSize` | Items per page (default: 10) |

### `filtered<T>(result: T, params?) => Filtered<T>`

| Parameter | Description |
|-----------|-------------|
| `result` | The result object to augment |
| `params.search` | Optional search string to attach |

<h2 id="contributing">🤗 Contributing</h2>

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

<h2 id="license">📝 License</h2>

[MIT](LICENSE) &copy; Marc Gavanier
