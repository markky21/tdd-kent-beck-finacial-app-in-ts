// 5 USD * 2 = 10 USD - (DONE)
// Field "amount" is private - (DONE)
// Method equals() - (DONE)
// What about side effects? - (DONE)
// 5 CHF * 2 = 10 CHF - (DONE)
// Compare Francs with Dollars - (DONE)
// Currency? - (DONE)
// Duplicate code in Dollar and Franc - (DONE)
// 5 USD + 5 USD = 10 USD
// 5 USD + 10 CHF = 20 USD if rate is USD:CHF=2:1
// What about rounding?
// Method hashCode()
// Compare to zero
// Compare to null
// Common multiplication
// Floating point numbers in JS :)
// Reduce Money with conversion
// Reduce (Bank, string)

type Currency = "USD" | "CHF";

export interface Expression {
  reduce(to: Currency): Money;
}

export class Sum implements Expression {
  constructor(readonly augend: Money, readonly addend: Money) {}

  reduce(): Money {
    return new Money(
      this.augend.currency,
      this.augend.amount + this.addend.amount
    );
  }
}

export class Bank {
  reduce(source: Expression, to: Currency): Money {
    return source.reduce(to);
  }
}

export class Money implements Expression {
  constructor(
    protected readonly _currency: Currency,
    protected readonly _amount: number
  ) {}

  get amount(): number {
    return this._amount;
  }

  get currency(): Currency {
    return this._currency;
  }

  equals(money: Money): boolean {
    return (
      this.currency === money.currency &&
      this.amount === money.amount &&
      this.constructor === money.constructor
    );
  }

  multiply(multiplier: number): Money {
    return new Money(this.currency, this.amount * multiplier);
  }

  add(addend: Money): Sum {
    return new Sum(this, addend);
  }

  reduce(to: Currency): Money {
    return this;
  }

  static dollar(amount: number): Money {
    return new Money("USD", amount);
  }

  static franc(amount: number): Money {
    return new Money("CHF", amount);
  }
}
