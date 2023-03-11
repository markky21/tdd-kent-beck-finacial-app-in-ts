import { Dollar } from "./main";

describe("Dollar", () => {
  test("multiply", () => {
    const sut = new Dollar(5);
    expect(sut.multiply(2)).toEqual(10);
  });
});
