import { sum } from '@/utils/calculator';

it('should test1 sum 2 and 2 and the result must be 4', () => {
  expect(2 + 2).toBe(4);
});

it('should test2 sum 2 and 2 even if one of them is a string and the result must be 4', () => {
  expect(sum('2', '2')).toBe(4);
});

it('should throw an error if what is provided to the method cannot be summed', () => {
  expect(() => {
    sum('K', '2');
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  // expect(() => {
  //   sum([2, 2]);
  // }).not.toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum(1);
  }).toThrowError();
});
