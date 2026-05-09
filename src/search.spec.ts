import { describe, expect, it } from 'vitest';
import { Search } from './search';

describe('Search', () => {
  it('should create a search term from a string', () => {
    expect(Search('hello')).toBe('hello');
  });

  it('should create a search term from an empty string', () => {
    expect(Search('')).toBe('');
  });
});
