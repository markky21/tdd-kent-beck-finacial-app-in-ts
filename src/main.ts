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

export class Dollar {
  constructor(private readonly _amount: number) {}

  get amount(): number {
    return this._amount;
  }

  multiply(multiplier: number): Dollar {
    return new Dollar(this._amount * multiplier);
  }

  equals(dollar: Dollar): boolean {
    return this._amount === dollar._amount;
  }
}

export class Franc {
  constructor(private readonly _amount: number) {}

  get amount(): number {
    return this._amount;
  }

  multiply(multiplier: number): Franc {
    return new Franc(this._amount * multiplier);
  }

  equals(dollar: Franc): boolean {
    return this._amount === dollar._amount;
  }
}
