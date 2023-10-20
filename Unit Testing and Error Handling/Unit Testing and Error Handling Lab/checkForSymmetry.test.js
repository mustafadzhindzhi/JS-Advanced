const isSymmetric = require('./checkForSymmetry');
const { expect } = require('chai');

describe('checkForSymmetry function tests', () => {
    it('should return false with string as input', () => {
        expect(isSymmetric('a')).to.be.equal(false);
    });

    it('should return false with number as input', () => {
        expect(isSymmetric(1)).to.be.false;
    });

    it('should return false with object as input', () => {
        expect(isSymmetric({})).to.be.equal(false);
    });

    it('should return false with different types in the array', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.equal(false);
    });

    it('should return false if the array is non-symmetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.equal(false);
    });

    it('should return true if the array with even length is symmetric', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.equal(true);
    });

    it('should return true if the array with odd length is symmetric', () => {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });

    it('should return true for symmetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.equal(true);
    });
});