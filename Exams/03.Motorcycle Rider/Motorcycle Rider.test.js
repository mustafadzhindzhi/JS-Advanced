const motorcycleRider = require('./Motorcycle Rider');
const { expect } = require('chai');

describe('motorcycleRider object tests', function () {
    describe('licenseRestriction function tests', function () {
        it('should throw and error Invalid Information! if the parameters are not AM, A1, A2, A', () => {
            expect(() => motorcycleRider.licenseRestriction('B')).to.throw(Error);
        });

        it('should return Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16. with AM as input', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.be.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });

        it('should return Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16. with A1 as input', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.be.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });

        it('should return Motorcycles with maximum power of 35KW. and the minimum age is 18. with A2 as input', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.be.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });

        it('should return No motorcycle restrictions, and the minimum age is 24. with A2 as input', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.be.equal('No motorcycle restrictions, and the minimum age is 24.');
        });
    });

    describe('motorcycleShowroom function tests when the maximum engine volume is higher', () => {
        it('should add the element in the new array', () => {
            expect(motorcycleRider.motorcycleShowroom([50], 100)).to.be.equal('There are 1 available motorcycles matching your criteria!');
        });

        it('should add the element in the new array when engine volume and mavimum engine volume are equal', () => {
            expect(motorcycleRider.motorcycleShowroom([50], 100)).to.be.equal('There are 1 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([50], 50)).to.be.equal('There are 1 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([50, 100], 100)).to.be.equal('There are 2 available motorcycles matching your criteria!');         
        });

        it('should return an error if first parameter is a string', function () {
            expect(() => motorcycleRider.motorcycleShowroom('a', 1)).to.throw(Error);
        });

        it('should return an error if first parameter is a number', function () {
            expect(() => motorcycleRider.motorcycleShowroom(1, 1)).to.throw(Error);
        });

        it('should return an error if first parameter is an object', function () {
            expect(() => motorcycleRider.motorcycleShowroom({}, 1)).to.throw(Error);
        });

        it('should return an error if first parameter is undefined', function () {
            expect(() => motorcycleRider.motorcycleShowroom(undefined, 1)).to.throw(Error);
        });

        it('should return an error if first parameter is null', function () {
            expect(() => motorcycleRider.motorcycleShowroom(null, 1)).to.throw(Error);
        });

        it('should return an error if first parameter is a boolean', function () {
            expect(() => motorcycleRider.motorcycleShowroom(true, 1)).to.throw(Error);
        });

        it('should return an error if first parameter is an empty array', function () {
            expect(() => motorcycleRider.motorcycleShowroom([], 1)).to.throw(Error);
        });

        it('should return an error if the second parameter is a string', function () {
            expect(() => motorcycleRider.motorcycleShowroom([1], 'a')).to.throw(Error);
        });

        it('should return an error if the second parameter is an object', function () {
            expect(() => motorcycleRider.motorcycleShowroom([1], {})).to.throw(Error);
        });

        it('should return an error if the second parameter is an array', function () {
            expect(() => motorcycleRider.motorcycleShowroom([1], [])).to.throw(Error);
        });

        it('should return an error if the second parameter is undefined', function () {
            expect(() => motorcycleRider.motorcycleShowroom([1], undefined)).to.throw(Error);
        });

        it('should return an error if the second parameter is null', function () {
            expect(() => motorcycleRider.motorcycleShowroom([1], null)).to.throw(Error);
        });

        it('should return an error if the second parameter is a boolean', function () {
            expect(() => motorcycleRider.motorcycleShowroom([1], true)).to.throw(Error);
        });

        it('should return an error if the second parameter is lower than 50', function () {
            expect(() => motorcycleRider([], 49)).to.throw(Error);
        });
    });

    describe('otherSpendings function tests', () => {
        it('should return You spend $${totalPrice} for equipment and consumables with 10% discount! if there is a discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).to.be.equal('You spend $243.00 for equipment and consumables with 10% discount!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables with 10% discount! if there is a discount', () => {
            expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], true)).to.be.equal('You spend $297.00 for equipment and consumables with 10% discount!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables with 10% discount! if there is a discount', () => {
            expect(motorcycleRider.otherSpendings(['jacked', 'helmet'], ['oil filter'], true)).to.be.equal('You spend $477.00 for equipment and consumables with 10% discount!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables with 10% discount! if there is a discount', () => {
            expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter', 'engine oil'], true)).to.be.equal('You spend $360.00 for equipment and consumables with 10% discount!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables with 10% discount! if there is a discount', () => {
            expect(motorcycleRider.otherSpendings(['jacked', 'helmet'], ['oil filter', 'engine oil'], true)).to.be.equal('You spend $540.00 for equipment and consumables with 10% discount!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables with 10% discount! if there is a discount', () => {
            expect(motorcycleRider.otherSpendings([], [], true)).to.be.equal('You spend $0.00 for equipment and consumables with 10% discount!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables with 10% discount! if there is a discount', () => {
            expect(motorcycleRider.otherSpendings(['jacked'], [], true)).to.be.equal('You spend $270.00 for equipment and consumables with 10% discount!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables with 10% discount! if there is a discount', () => {
            expect(motorcycleRider.otherSpendings([], ['oil filter'], true)).to.be.equal('You spend $27.00 for equipment and consumables with 10% discount!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables! if there is not discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.be.equal('You spend $270.00 for equipment and consumables!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables! if there is not discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], false)).to.be.equal('You spend $570.00 for equipment and consumables!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables! if there is not discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil', 'oil filter'], false)).to.be.equal('You spend $300.00 for equipment and consumables!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables! if there is not discount', () => {
            expect(motorcycleRider.otherSpendings([], [], false)).to.be.equal('You spend $0.00 for equipment and consumables!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables! if there is not discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], [], false)).to.be.equal('You spend $200.00 for equipment and consumables!');
        });

        it('should return You spend $${totalPrice} for equipment and consumables! if there is not discount', () => {
            expect(motorcycleRider.otherSpendings([], ['engine oil'], false)).to.be.equal('You spend $70.00 for equipment and consumables!');
        });

        it('should throw an error if the first parameter is a string', function () {
            expect(() => motorcycleRider.otherSpendings('a', [], true)).to.throw(Error);
        });

        it('should throw an error if the first parameter is a number', function () {
            expect(() => motorcycleRider.otherSpendings(1, [], true)).to.throw(Error);
        });

        it('should throw an error if the first parameter is an object', function () {
            expect(() => motorcycleRider.otherSpendings({}, [], true)).to.throw(Error);
        });

        it('should throw an error if the first parameter is a undefined', function () {
            expect(() => motorcycleRider.otherSpendings(undefined, [], true)).to.throw(Error);
        });

        it('should throw an error if the first parameter is null', function () {
            expect(() => motorcycleRider.otherSpendings(null, [], false)).to.throw(Error);
        });

        it('should throw an error if the first parameter is a boolean', function () {
            expect(() => motorcycleRider.otherSpendings(true, [], true)).to.throw(Error);
        });

        it('should throw an error if the second parameter is a string', function () {
            expect(() => motorcycleRider.otherSpendings([], 'a', true)).to.throw(Error);
        });

        it('should throw an error if the second parameter is a number', function () {
            expect(() => motorcycleRider.otherSpendings([], 1, true)).to.throw(Error);
        });

        it('should throw an error if the second parameter is an object', function () {
            expect(() => motorcycleRider.otherSpendings([], {}, true)).to.throw(Error);
        });

        it('should throw an error if the second parameter is undefined', function () {
            expect(() => motorcycleRider.otherSpendings([], undefined, true)).to.throw(Error);
        });

        it('should throw an error if the second parameter is null', function () {
            expect(() => motorcycleRider.otherSpendings([], null, false)).to.throw(Error);
        });

        it('should throw an error if the second parameter is a boolean', function () {
            expect(() => motorcycleRider.otherSpendings([], false, false)).to.throw(Error);
        });

        it('should throw an error if the third parameter is a string', function () {
            expect(() => motorcycleRider.otherSpendings([], [], 'a')).to.throw(Error);
        });

        it('should throw an error if the second parameter is a number', function () {
            expect(() => motorcycleRider.otherSpendings([], [], 1)).to.throw(Error);
        });

        it('should throw an error if the second parameter is an array', function () {
            expect(() => motorcycleRider.otherSpendings([], [], [])).to.throw(Error);
        });

        it('should throw an error if the second parameter is an object', function () {
            expect(() => motorcycleRider.otherSpendings([], [], {})).to.throw(Error);
        });

        it('should throw an error if the second parameter is undefined', function () {
            expect(() => motorcycleRider.otherSpendings([], [], undefined)).to.throw(Error);
        });

        it('should throw an error if the second parameter is a null', function () {
            expect(() => motorcycleRider.otherSpendings([], [], null)).to.throw(Error);
        });
    });
});