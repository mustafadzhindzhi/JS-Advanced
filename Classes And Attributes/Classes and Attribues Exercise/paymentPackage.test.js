const PaymentPackage = require('./paymentPackage');
const { expect } = require('chai');

describe('Payment Package tests', () => {
    it('constructor', () => {
        let pp = new PaymentPackage('Name', 100);

        expect(pp.name).to.equal('Name');
        expect(pp.value).to.equal(100);
        expect(pp.VAT).to.equal(20);
        expect(pp.active).to.equal(true);
    });

    describe('constructor tests', () => {
        it('should throw an error, when the name is an empty string', () => {
            expect(() => new PaymentPackage('', 123)).to.throw(Error);
        });

        it('should throw an error, when the name is an empty string and the value is a negative number', () => {
            expect(() => new PaymentPackage('', -1)).to.throw(Error);
        });

        it('should return the correct value', () => {
            pp = new PaymentPackage('abc', 123);
            expect(pp.value).to.equal(123);
        });

        it('should return the correct value if it set to 0', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(pp.value = 0).to.equal(0);
        });

        it('should return the correct name', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(pp.name).to.equal('abc');
        });

        it('should throw an error, when the value is a negative number', () => {
            expect(() => new PaymentPackage('abc', -1)).to.throw(Error);
        });

        it('should throw an error, when the name is not a string and the value is not a number', () => {
            expect(() => new PaymentPackage(123, 'abc')).to.throw(Error);
        });

        it('should throw an error, when the value is not a number', () => {
            expect(() => new PaymentPackage('abc', 'abc')).to.throw(Error);
        });

        it('should throw an error, when the name is not a string', () => {
            expect(() => new PaymentPackage(123, 123)).to.throw(Error);
        });
    });

    describe('name tests', () => {
        it('should throw an error, when the name is a number', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(() => (pp.name = 1)).to.throw(Error);
        });

        it('should return the correct new name', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(pp.name = 'cba').to.equal('cba');
        });

        it('should throw an error, when the name is an empty string', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(() => (pp.name = '')).to.throw(Error);
        });
    });

    describe('value tests', () => {
        it('should throw an error, when the value is a number', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(() => (pp.value = -1)).to.throw(Error);
        });

        it('should return the correct new value', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(pp.value = 321).to.equal(321);
        });

        it('should throw an error, when the value is an empty string', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(() => (pp.value = 'abc')).to.throw(Error);
        });
    });

    describe('VAT tests', () => {
        it('should throw an error, when the VAT is negative a number', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(() => (pp.VAT = -1)).to.throw(Error);
        });

        it('should return the correct new VAT', () => {
            const pp = new PaymentPackage('abc', 123);
            expect((pp.VAT = 123)).to.equal(123);
        });

        it('should throw an error, when the VAT is not a number', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(() => (pp.VAT = 'abc')).to.throw(Error);
        });

        it('should return the correct new VAT', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(pp.VAT = 0).to.equal(0);
        });
    });

    describe('active tests', () => {
        it('should return the correct new active', () => {
            const pp = new PaymentPackage('abc', 123);
            expect((pp.active = true)).to.equal(true);
        });

        it('should throw an error, when the active is not a boolean', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(() => (pp.active = -1)).to.throw(Error);
        });

        it('should throw an error, when the active is not a boolean', () => {
            const pp = new PaymentPackage('abc', 123);
            expect(() => (pp.active = 'abc')).to.throw(Error);
        });
    });

    describe('Tests for toString method', () => {
        it('should return a string if all values in the input are correct', () => {
            const flag = new PaymentPackage('abc', 123);
            flag.VAT = 30;
            flag.active = false;
            const result = [
                'Package: abc (inactive)',
                '- Value (excl. VAT): 123',
                '- Value (VAT 30%): 159.9',
            ];
            expect(flag.toString()).to.equal(result.join('\n'));
        });

        it('should return a string if all values in the input are correct', () => {
            const flag = new PaymentPackage('abc', 123);
            flag.active = false;
            const result = [
                'Package: abc (inactive)',
                '- Value (excl. VAT): 123',
                '- Value (VAT 20%): 147.6',
            ];
            expect(flag.toString()).to.equal(result.join('\n'));
        });

        it('should return a string if all values in the input are correct', () => {
            const flag = new PaymentPackage('abc', 123);
            flag.VAT = 30;
            const result = [
                'Package: abc',
                '- Value (excl. VAT): 123',
                '- Value (VAT 30%): 159.9',
            ];
            expect(flag.toString()).to.equal(result.join('\n'));
        });

        it('should return a string if all values in the input are correct', () => {
            const flag = new PaymentPackage('abc', 123);
            const result = [
                'Package: abc',
                '- Value (excl. VAT): 123',
                '- Value (VAT 20%): 147.6',
            ];
            expect(flag.toString()).to.equal(result.join('\n'));
        });
    });
});