// 5 USD + 10CHF = 10 CHF if rate is 2:1
// 5 USD * 2 = 10 USD - (DONE)
// Field "amount" is private
// What about side effects? - (DONE)
// What about rounding?

export class Dollar {
  constructor(readonly amount: number) {}

  multiply(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}
