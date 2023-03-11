// 5 USD + 10CHF = 10 CHF if rate is 2:1
// 5 USD * 2 = 10 USD - (DONE)
// Field "amount" is private - (DONE)
// What about side effects? - (DONE)
// What about rounding?
// Method equals() - (DONE)
// Method hashCode()
// Compare to zero
// Compare to null
// 5 CHF * 2 = 10 CHF - (DONE)
// Compare Francs with Dollars - (DONE)
// Common multiplication
// Floating point numbers in JS :)
// Currency?

export class Money {
  constructor(protected readonly _amount: number) {}

  get amount(): number {
    return this._amount;
  }

  equals(money: Money): boolean {
    return this._amount === money._amount;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  multiply(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }

  equals(money: Money): boolean {
    return (
      this.amount === money.amount && this.constructor === money.constructor
    );
  }
}

export class Franc extends Money {
  multiply(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }

  equals(money: Money): boolean {
    return (
      this.amount === money.amount && this.constructor === money.constructor
    );
  }
}
