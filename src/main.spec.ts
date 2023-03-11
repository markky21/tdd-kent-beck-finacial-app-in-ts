import { Dollar, Franc, Money } from "./main";

describe("Dollar", () => {
  test("multiply", () => {
    const dollar1 = Money.dollar(5);
    const dollar2 = dollar1.multiply(2);
    expect(dollar2.amount).toEqual(10);
    expect(dollar1.amount).toEqual(5);
  });
});

describe("Franc", () => {
  test("multiply", () => {
    const franc1 = Money.franc(5);
    const franc2 = franc1.multiply(2);
    expect(franc2.amount).toEqual(Money.franc(10).amount);
    expect(franc1.amount).toEqual(Money.franc(5).amount);
  });
});

describe("Money", () => {
  test("equals", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
    expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
    expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });
});
