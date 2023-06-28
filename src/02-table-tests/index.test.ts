// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  {
    testName: 'should add two numbers',
    input: { a: 100, b: 20, action: Action.Add },
    output: 120,
  },
  {
    testName: 'should add two numbers',
    input: { a: 0, b: 7, action: Action.Add },
    output: 7,
  },
  {
    testName: 'should add two numbers',
    input: { a: -25, b: 5, action: Action.Add },
    output: -20,
  },
  {
    testName: 'should add two numbers',
    input: { a: 0, b: 0, action: Action.Add },
    output: 0,
  },
  {
    testName: 'should subtract two numbers',
    input: { a: 100, b: 20, action: Action.Subtract },
    output: 80,
  },
  {
    testName: 'should subtract two numbers',
    input: { a: 0, b: 7, action: Action.Subtract },
    output: -7,
  },
  {
    testName: 'should subtract two numbers',
    input: { a: -25, b: 5, action: Action.Subtract },
    output: -30,
  },
  {
    testName: 'should multiply two numbers',
    input: { a: 100, b: 20, action: Action.Multiply },
    output: 2000,
  },
  {
    testName: 'should multiply two numbers',
    input: { a: 0, b: 7, action: Action.Multiply },
    output: 0,
  },
  {
    testName: 'should multiply two numbers',
    input: { a: -25, b: 5, action: Action.Multiply },
    output: -125,
  },
  {
    testName: 'should multiply two numbers',
    input: { a: 0, b: 0, action: Action.Multiply },
    output: 0,
  },
  {
    testName: 'should divide two numbers',
    input: { a: 100, b: 20, action: Action.Divide },
    output: 5,
  },
  {
    testName: 'should divide two numbers',
    input: { a: 0, b: 7, action: Action.Divide },
    output: 0,
  },
  {
    testName: 'should divide two numbers',
    input: { a: -25, b: 5, action: Action.Divide },
    output: -5,
  },
  {
    testName: 'should exponential two numbers',
    input: { a: 0, b: 0, action: Action.Exponentiate },
    output: 1,
  },
  {
    testName: 'should exponential two numbers',
    input: { a: 100, b: 20, action: Action.Exponentiate },
    output: 1e40,
  },
  {
    testName: 'should exponential two numbers',
    input: { a: 0, b: 7, action: Action.Exponentiate },
    output: 0,
  },
  {
    testName: 'should exponential two numbers',
    input: { a: -25, b: 5, action: Action.Exponentiate },
    output: -9765625,
  },
  {
    testName: 'should exponential two numbers',
    input: { a: 0, b: 0, action: Action.Exponentiate },
    output: 1,
  },
  {
    testName: 'should return null for invalid action',
    input: { a: 0, b: 'Weeee', action: 'bla-bla' },
    output: null,
  },
  {
    testName: 'should return null for invalid arguments',
    input: { a: 0, b: undefined, action: Action.Divide },
    output: null,
  },
  {
    testName: 'should return null for invalid arguments',
    input: { a: 'NaN', b: 0, action: Action.Multiply },
    output: null,
  },
  {
    testName: 'should return null for invalid arguments',
    input: { a: [], b: {}, action: Action.Add },
    output: null,
  },
];

describe('simpleCalculator', () => {
  test.each(testCases)('$testName', ({ input, output }) => {
    const result = simpleCalculator(input);
    if (output === null) expect(result).toBeNull();
    else expect(result).toBe(output);
  });
});
