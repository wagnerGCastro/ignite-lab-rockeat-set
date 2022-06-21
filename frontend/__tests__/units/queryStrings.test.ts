import { queryString, parse } from '@/utils/queryStrings';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Wagner',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Wagner&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Wagner',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Wagner&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Wagner',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Wagner&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Wagner',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Wagner';

    expect(parse(qs)).toEqual({
      name: 'Wagner',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Wagner&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Wagner',
      abilities: ['JS', 'TDD'],
    });
  });
});
