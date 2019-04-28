module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }

    payment() {
      const mIR = this.monthlyInterestRate(this.interest, this.period);
      const nOP = this.numberOfPayments(this.term, this.period);
      const cIR = this.compoundedInterestRate(mIR, nOP);
      const iQ = this.interestQuotient(mIR, cIR, nOP);
      const mP = this.monthlyPayment(this.principal, iQ);
      return mP;
    }
    monthlyPayment(principal, interestQuotient){
        return principal * interestQuotient;
    }
    monthlyInterestRate(interest, period){
        return interest / (period * 100);
    }
    numberOfPayments(term, period){
        return term * period;
    }
    compoundedInterestRate(monthlyInterestRate, numberOfPayments){
        return Math.pow((1 + monthlyInterestRate), numberOfPayments);
    }
    interestQuotient(monthlyInterestRate, compoundedInterestRate, numberOfPayments){
        return (monthlyInterestRate * compoundedInterestRate) / ((Math.pow((1 + monthlyInterestRate), numberOfPayments)) - 1);
    }
  }