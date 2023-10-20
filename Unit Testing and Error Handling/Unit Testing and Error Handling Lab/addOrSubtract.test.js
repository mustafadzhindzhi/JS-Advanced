const createCalculator = require('./addOrSubtract');
const { expect } = require('chai');

describe('createCalculator function tests', () => {
    it('should return object', () => {
        expect(typeof createCalculator()).to.be.equal('object');
    });

    it('should return function for the object methods', () => {
        expect(typeof createCalculator().add).to.be.equal('function');
        expect(typeof createCalculator().subtract).to.be.equal('function');
        expect(typeof createCalculator().get).to.be.equal('function');
    });

    it('internal sum can\'t be modified', () => {
        expect(createCalculator().value).to.be.equal(undefined);
    });

    it('add method should add parsable input', () => {
        const calc = createCalculator();
        calc.add('1');
        expect(calc.get()).to.be.equal(1);
    });

    it('substract method should substract parsable input', () => {
        const calc = createCalculator();
        calc.add(2);
        calc.subtract('1');
        expect(calc.get()).to.be.equal(1);
    });
});