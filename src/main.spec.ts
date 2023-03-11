import { Dollar, Franc } from "./main";

describe("Dollar", () => {
  test("multiply", () => {
    const dollar1 = new Dollar(5);
    const dollar2 = dollar1.multiply(2);
    expect(dollar2.amount).toEqual(10);
    expect(dollar1.amount).toEqual(5);
  });

  test("equals", () => {
    const dollar1 = new Dollar(5);
    const dollar2 = new Dollar(5);
    expect(dollar1.equals(dollar2)).toBeTruthy();
  });
});

describe("Franc", () => {
  test("multiply", () => {
    const dollar1 = new Franc(5);
    const dollar2 = dollar1.multiply(2);
    expect(dollar2.amount).toEqual(10);
    expect(dollar1.amount).toEqual(5);
  });

  test("equals", () => {
    const dollar1 = new Franc(5);
    const dollar2 = new Franc(5);
    expect(dollar1.equals(dollar2)).toBeTruthy();
  });
});

describe("Money", () => {
  test("equals", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
    expect(new Dollar(5).equals(new Franc(5))).toBeFalsy();
    expect(new Franc(5).equals(new Dollar(5))).toBeFalsy();
  });
});
