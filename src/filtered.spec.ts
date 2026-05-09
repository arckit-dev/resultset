import { describe, expect, it } from 'vitest';
import { filtered } from './filtered';
import { Search } from './search';

describe('filtered', () => {
  it('should return result without search when no params', () => {
    const result = filtered({ items: [], total: 0 });

    expect(result).toStrictEqual({ items: [], total: 0 });
    expect(result).not.toHaveProperty('search');
  });

  it('should return result without search when params is empty', () => {
    const result = filtered({ items: [], total: 0 }, {});

    expect(result).toStrictEqual({ items: [], total: 0 });
    expect(result).not.toHaveProperty('search');
  });

  it('should attach search to result', () => {
    const result = filtered({ items: ['a'], total: 1 }, { search: Search('hello') });

    expect(result).toStrictEqual({ items: ['a'], total: 1, search: Search('hello') });
  });

  it('should attach empty string as search', () => {
    const result = filtered({ items: [] }, { search: Search('') });

    expect(result).toStrictEqual({ items: [], search: Search('') });
  });

  it('should preserve all existing properties', () => {
    const result = filtered({ items: [], total: 0, extra: true }, { search: Search('test') });

    expect(result).toStrictEqual({ items: [], total: 0, extra: true, search: Search('test') });
  });
});
