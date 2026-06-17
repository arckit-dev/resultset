import { describe, expect, it } from 'vitest';
import { SortDirection } from './sort-direction';

describe('SortDirection', () => {
  it('should create an ascending direction', () => {
    expect(SortDirection('asc')).toBe('asc');
  });

  it('should create a descending direction', () => {
    expect(SortDirection('desc')).toBe('desc');
  });

  it('should default to ascending for any other value', () => {
    expect(SortDirection('')).toBe('asc');
    expect(SortDirection('anything')).toBe('asc');
  });
});
