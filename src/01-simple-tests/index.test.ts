// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Add })).toBe(3);
    expect(simpleCalculator({ a: 0, b: 7, action: Action.Add })).toBe(7);
    expect(simpleCalculator({ a: -25, b: 5, action: Action.Add })).toBe(-20);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Add })).toBe(0);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 100, b: 20, action: Action.Subtract })).toBe(
      80,
    );
    expect(simpleCalculator({ a: 0, b: 7, action: Action.Subtract })).toBe(-7);
    expect(simpleCalculator({ a: -25, b: 5, action: Action.Subtract })).toBe(
      -30,
    );
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Subtract })).toBe(0);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 100, b: 20, action: Action.Multiply })).toBe(
      2000,
    );
    expect(simpleCalculator({ a: 0, b: 7, action: Action.Multiply })).toBe(0);
    expect(simpleCalculator({ a: -25, b: 5, action: Action.Multiply })).toBe(
      -125,
    );
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Multiply })).toBe(0);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 100, b: 20, action: Action.Divide })).toBe(5);
    expect(simpleCalculator({ a: 0, b: 7, action: Action.Divide })).toBe(0);
    expect(simpleCalculator({ a: -25, b: 5, action: Action.Divide })).toBe(-5);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Divide })).toBeNaN();
  });

  test('should exponentiate two numbers', () => {
    expect(
      simpleCalculator({ a: 100, b: 20, action: Action.Exponentiate }),
    ).toBe(1e40);
    expect(simpleCalculator({ a: 0, b: 7, action: Action.Exponentiate })).toBe(
      0,
    );
    expect(
      simpleCalculator({ a: -25, b: 5, action: Action.Exponentiate }),
    ).toBe(-9765625);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Exponentiate })).toBe(
      1,
    );
    expect(
      simpleCalculator({ a: 1000, b: 1000, action: Action.Exponentiate }),
    ).toBe(Infinity);
  });

  test('should return null for invalid action', () => {
    expect(
      simpleCalculator({ a: 100, b: 20, action: 'Wweeeeeeee!' }),
    ).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(
      simpleCalculator({ a: 100, b: 'Invalid', action: Action.Add }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: NaN, b: 'Invalid', action: Action.Add }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: null, b: undefined, action: Action.Subtract }),
    ).toBeNull();
  });
});
