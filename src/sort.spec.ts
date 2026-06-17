import { describe, expect, it } from 'vitest';
import { Sort } from './sort';

describe('Sort', () => {
  it('should create a sort with the given field and direction', () => {
    expect(Sort('name', 'desc')).toStrictEqual({ field: 'name', direction: 'desc' });
  });

  it('should default to ascending direction', () => {
    expect(Sort('name')).toStrictEqual({ field: 'name', direction: 'asc' });
  });
});
