const sum = require('./sumOfNumbers');
const { expect } = require('chai');

describe('sumOfNumbers function tests', () => {
    it('should return the sum of all the numbers in the array with numbers', () => {
        expect(sum([1, 2])).to.be.equal(3);
    });

    it('should return the sum of all the numbers in the array with numbers as string', () => {
        expect(sum(['1', '2'])).to.be.equal(3);
    });

    it('should return NaN if one of the parameters is not a number', () => {
        expect(sum(['hi', 1])).to.be.deep.equal(NaN);
    });
});