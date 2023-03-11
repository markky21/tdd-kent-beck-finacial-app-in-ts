import { Dollar } from "./main";

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
