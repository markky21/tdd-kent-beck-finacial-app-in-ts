import { Bank, Expression, Money, Sum } from "./main";

test("equals", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
  expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
  expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
  expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
});

test("currency", () => {
  expect(Money.dollar(1).currency).toEqual("USD");
  expect(Money.franc(1).currency).toEqual("CHF");
});

test("multiply", () => {
  const dollar1 = Money.dollar(5);
  const dollar2 = dollar1.multiply(2);
  expect(dollar2.amount).toEqual(10);
  expect(dollar1.amount).toEqual(5);
});

test("addition the same currency", () => {
  const dollar1 = Money.dollar(5);
  const sum: Expression = dollar1.add(dollar1);
  const bank = new Bank();
  const reduced = bank.reduce(sum, "USD");
  expect(reduced.amount).toEqual(Money.dollar(10).amount);
});

test("reduce sum", () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, "USD");
  expect(result.amount).toEqual(Money.dollar(7).amount);
});

test("reduce money", () => {
  const bank = new Bank();
  const result = bank.reduce(Money.dollar(1), "USD");
  expect(result.amount).toEqual(Money.dollar(1).amount);
});

test("reduce money different currency", () => {
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(Money.franc(2), "USD");
  expect(result.amount).toEqual(Money.dollar(1).amount);
});

test("mixed addition", () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(fiveBucks.add(tenFrancs), "USD");
  expect(result.amount).toEqual(Money.dollar(10).amount);
});
