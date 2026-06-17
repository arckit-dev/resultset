import { describe, expect, it } from 'vitest';
import { Sort } from './sort';
import { sorted } from './sorted';

describe('sorted', () => {
  it('should return result without sort when no params', () => {
    const result = sorted({ items: [], total: 0 });

    expect(result).toStrictEqual({ items: [], total: 0 });
    expect(result).not.toHaveProperty('sort');
  });

  it('should return result without sort when params is empty', () => {
    const result = sorted({ items: [], total: 0 }, {});

    expect(result).toStrictEqual({ items: [], total: 0 });
    expect(result).not.toHaveProperty('sort');
  });

  it('should attach sort to result', () => {
    const result = sorted({ items: ['a'], total: 1 }, { sort: Sort('name', 'desc') });

    expect(result).toStrictEqual({ items: ['a'], total: 1, sort: { field: 'name', direction: 'desc' } });
  });

  it('should preserve all existing properties', () => {
    const result = sorted({ items: [], total: 0, extra: true }, { sort: Sort('id') });

    expect(result).toStrictEqual({ items: [], total: 0, extra: true, sort: { field: 'id', direction: 'asc' } });
  });
});
