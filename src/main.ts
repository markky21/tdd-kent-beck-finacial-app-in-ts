// 5 USD * 2 = 10 USD - (DONE)
// Field "amount" is private - (DONE)
// Method equals() - (DONE)
// What about side effects? - (DONE)
// 5 CHF * 2 = 10 CHF - (DONE)
// Compare Francs with Dollars - (DONE)
// Currency? - (DONE)
// Duplicate code in Dollar and Franc - (DONE)
// Reduce (Bank, string) - (DONE)
// Reduce Money with conversion - (DONE)
// 5 USD + 5 USD = 10 USD - (DONE)

// 5 USD + 10 CHF = 20 USD if rate is USD:CHF=2:1
// What about rounding?
// Method hashCode()
// Compare to zero
// Compare to null
// Common multiplication
// Floating point numbers in JS :)
// Money object as result of addition 5 USD + 5 USD
// Sum.plus()
// Expression.times()

type Currency = "USD" | "CHF";
type HashCode = string;

export interface Expression {
  readonly amount: number;
  reduce(bank: Bank, to: Currency): Expression;
  add(addend: Expression): Expression;
}

export class Sum implements Expression {
  constructor(readonly augend: Expression, readonly addend: Expression) {}

  get amount(): number {
    return this.augend.amount;
  }

  reduce(bank: Bank, to: Currency): Expression {
    const amount =
      bank.reduce(this.augend, to).amount + bank.reduce(this.addend, to).amount;
    return new Money(to, amount);
  }

  add(addend: Expression): Expression {
    return null as unknown as Expression;
  }
}

export class Pair {
  constructor(readonly from: Currency, readonly to: Currency) {}

  equals(object: Pair): boolean {
    return this.from === object.from && this.to === object.to;
  }

  hashCode(): HashCode {
    return `${this.from}_${this.to}`;
  }
}

export class Bank {
  reduce(source: Expression, to: Currency): Expression {
    return source.reduce(this, to);
  }

  addRate(from: Currency, to: Currency, rate: number) {
    this.rates.set(new Pair(from, to).hashCode(), rate);
  }

  rate(from: Currency, to: Currency): number {
    if (from === to) return 1;
    return this.rates.get(new Pair(from, to).hashCode()) || 0;
  }

  private rates: Map<HashCode, number> = new Map();
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

  multiply(multiplier: number): Expression {
    return new Money(this.currency, this.amount * multiplier);
  }

  add(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: Currency): Money {
    const rate = bank.rate(this.currency, to);
    return new Money(to, this.amount / rate);
  }

  static dollar(amount: number): Money {
    return new Money("USD", amount);
  }

  static franc(amount: number): Money {
    return new Money("CHF", amount);
  }
}
