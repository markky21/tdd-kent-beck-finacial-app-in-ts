import { Bank, Expression, Money, Sum } from "./main";

describe("Money", () => {
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
    const reduced: Money = bank.reduce(sum, "USD");
    expect(reduced.equals(Money.dollar(10))).toBeTruthy();
  });

  test("add return sum object instance", () => {
    const dollar1 = Money.dollar(5);
    const sum = dollar1.add(dollar1);
    expect(dollar1.amount).toEqual(sum.augend.amount);
  });
});

describe("Bank", () => {
  test("reduce sum", () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(result.equals(Money.dollar(7))).toBeTruthy();
  });

  test("reduce money", () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(result.equals(Money.dollar(1))).toBeTruthy();
  });
});
