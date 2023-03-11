// 5 USD + 10CHF = 10 CHF if rate is 2:1
// 5 USD * 2 = 10 USD - (DONE)
// Field "amount" is private
// What about side effects? - (DONE)
// What about rounding?
// Method equals() - (DONE)
// Method hashCode()
// Compare to zero
// Compare to null

export class Dollar {
  constructor(readonly amount: number) {}

  multiply(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar: Dollar): boolean {
    return this.amount === dollar.amount;
  }
}
