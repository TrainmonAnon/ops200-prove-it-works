const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage(10000, 100, 1, 1);
    });

    it('should have an payment function', () => {
        expect(mortgage.payment).to.exist;
    });

    it('should caclulate payment correctly', () => {
        expect(mortgage.payment()).to.equal(20000);
    });

    it('should have a monthlyInterestRate function', () => {
        expect(mortgage.monthlyInterestRate).to.exist;
    });

    it('should caclulate monthlyInterestRate correctly', () => {
        expect(mortgage.monthlyInterestRate(4, 1)).to.equal(.04);
    });
    
    it('should have a numberOfPayments function', () => {
        expect(mortgage.numberOfPayments).to.exist;
    });

    it('should caclulate numberOfPayments correctly', () => {
        expect(mortgage.numberOfPayments(4, 1)).to.equal(4);
    });

    it('should have a compoundedInterestRate function', () => {
        expect(mortgage.compoundedInterestRate).to.exist;
    });

    it('should caclulate compoundedInterestRate correctly', () => {
        expect(mortgage.compoundedInterestRate(4, 1)).to.equal(5);
    });

    it('should have a interestQuotient function', () => {
        expect(mortgage.interestQuotient).to.exist;
    });

    it('should caclulate interestQuotient correctly', () => {
        expect(mortgage.interestQuotient(4, 1, 1)).to.equal(1);
    });

    it('should have an monthlyPayment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should caclulate monthlyPayment correctly', () => {
        expect(mortgage.monthlyPayment(10000, 1)).to.equal(10000);
    });
});