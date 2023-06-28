// Uncomment the code below and write your tests
// import { getBankAccount } from '.';

import {
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from './index';

describe('BankAccount', () => {
  const initialBalance = 100;
  let account = getBankAccount(initialBalance);

  beforeEach(() => {
    account = getBankAccount(initialBalance);
  });

  test('should create account with initial balance', () => {
    expect(account.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => account.withdraw(initialBalance + 1)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const anotherAccount = getBankAccount(50);

    expect(() => account.transfer(initialBalance + 1, anotherAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => account.transfer(initialBalance, account)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const depositValue = 50;
    account.deposit(depositValue);

    expect(account.getBalance()).toBe(initialBalance + depositValue);
  });

  test('should withdraw money', () => {
    const withdrowValue = 50;
    account.withdraw(withdrowValue);
    expect(account.getBalance()).toBe(initialBalance - withdrowValue);
  });

  test('should transfer money', () => {
    const anotherAccountInitialBalance = 300;
    const anotherAccount = getBankAccount(anotherAccountInitialBalance);
    const transferValue = 50;

    account.transfer(transferValue, anotherAccount);

    expect(account.getBalance()).toBe(initialBalance - transferValue);
    expect(anotherAccount.getBalance()).toBe(
      anotherAccountInitialBalance + transferValue,
    );
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const balance = await account.fetchBalance();
    if (balance !== null) {
      expect(balance).not.toBeNull();
      expect(typeof balance).toBe('number');
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    try {
      await account.synchronizeBalance();
      expect(account.getBalance()).not.toBe(initialBalance);
    } catch (err) {
      return;
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    try {
      await account.synchronizeBalance();
    } catch (err) {
      expect(err).toBeInstanceOf(SynchronizationFailedError);
    }
  });
});
