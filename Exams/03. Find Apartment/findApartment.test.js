const findNewApartment = require('./findApartment');
const { expect } = require('chai');

describe('findNewApartment object tests', () => {
    describe('isGoodLocation method tests', () => {
        it('should return "This location is not suitable for you." if the first parameter is wrong', () => {
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.be.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Sopot', false)).to.be.equal('This location is not suitable for you.');
        });

        it('should return "There is no public transport in area." if the vaule of the second parameter is false', () => {
            expect(findNewApartment.isGoodLocation('Varna', false)).to.be.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.be.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.be.equal('There is no public transport in area.');
        });

        it('should return "You can go on home tour!" with wrong parameters', () => {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.be.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.be.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.be.equal('You can go on home tour!');
        });

        it('should throw an error if the first parameter is a number', function () {
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw(Error);
        });

        it('should throw an error if the first parameter is an array', function () {
            expect(() => findNewApartment.isGoodLocation([], false)).to.throw(Error);
        });

        it('should throw an error if the first parameter is an object', function () {
            expect(() => findNewApartment.isGoodLocation({}, true)).to.throw(Error);
        });

        it('should throw an error if the first parameter is undefined', function () {
            expect(() => findNewApartment.isGoodLocation(undefined, false)).to.throw(Error);
        });

        it('should throw an error if the first parameter is null', function () {
            expect(() => findNewApartment.isGoodLocation(null, true)).to.throw(Error);
        });

        it('should throw an error if the first parameter is boolean', function () {
            expect(() => findNewApartment.isGoodLocation(true, false)).to.throw(Error);
        });

        it('should throw an error if the second parameter is a number', function () {
            expect(() => findNewApartment.isGoodLocation('a', 1)).to.throw(Error);
        });

        it('should throw an error if the second parameter is a string', function () {
            expect(() => findNewApartment.isGoodLocation('a', '1')).to.throw(Error);
        });

        it('should throw an error if the second parameter is an array', function () {
            expect(() => findNewApartment.isGoodLocation('a', [])).to.throw(Error);
        });

        it('should throw an error if the second parameter is an object', function () {
            expect(() => findNewApartment.isGoodLocation('a', {})).to.throw(Error);
        });

        it('should throw an error if the second parameter is undefined', function () {
            expect(() => findNewApartment.isGoodLocation('a', undefined)).to.throw(Error);
        });

        it('should throw an error if the second parameter is null', function () {
            expect(() => findNewApartment.isGoodLocation('a', null)).to.throw(Error);
        });
    });

    describe('isLargeEnough method tests', () => {
        it('should return added apartments', () => {
            expect(findNewApartment.isLargeEnough([40, 50], 40)).to.be.equal('40, 50');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.be.equal('50, 60');
            expect(findNewApartment.isLargeEnough([40], 30)).to.be.equal('40');
            expect(findNewApartment.isLargeEnough([40], 50)).to.be.equal('');
        });

        it('should thro an error if the first parameter is a string', function () {
            expect(() => findNewApartment.isLargeEnough('a', 1)).to.throw(Error);
        });

        it('should thro an error if the first parameter is a number', function () {
            expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw(Error);
        });

        it('should thro an error if the first parameter is an object', function () {
            expect(() => findNewApartment.isLargeEnough({}, 1)).to.throw(Error);
        });

        it('should thro an error if the first parameter is undefined', function () {
            expect(() => findNewApartment.isLargeEnough(undefined, 1)).to.throw(Error);
        });

        it('should thro an error if the first parameter is null', function () {
            expect(() => findNewApartment.isLargeEnough(null, 1)).to.throw(Error);
        });

        it('should thro an error if the first parameter is boolean', function () {
            expect(() => findNewApartment.isLargeEnough(false, 1)).to.throw(Error);
        });

        it('should thro an error if the first parameter is an empty array', function () {
            expect(() => findNewApartment.isLargeEnough([], 1)).to.throw(Error);
        });

        it('should thro an error if the second parameter is a string', function () {
            expect(() => findNewApartment.isLargeEnough([1], 'a')).to.throw(Error);
        });

        it('should thro an error if the second parameter is an array', function () {
            expect(() => findNewApartment.isLargeEnough([1], [])).to.throw(Error);
        });

        it('should thro an error if the second parameter is an object', function () {
            expect(() => findNewApartment.isLargeEnough([1], {})).to.throw(Error);
        });

        it('should thro an error if the second parameter is undefined', function () {
            expect(() => findNewApartment.isLargeEnough([1], undefined)).to.throw(Error);
        });

        it('should thro an error if the second parameter is null', function () {
            expect(() => findNewApartment.isLargeEnough([1], null)).to.throw(Error);
        });

        it('should thro an error if the second parameter is boolean', function () {
            expect(() => findNewApartment.isLargeEnough([1], true)).to.throw(Error);
        });
    });

    describe('isItAffordable method tests', () => {
        it('should return "You don\'t have enough money for this house!" if the result is lower than 0', () => {
            expect(findNewApartment.isItAffordable(100, 50)).to.be.equal('You don\'t have enough money for this house!');
        });

        it('should return "You can afford this home!" if the result is bigger than 0', () => {
            expect(findNewApartment.isItAffordable(50, 100)).to.be.equal('You can afford this home!');
            expect(findNewApartment.isItAffordable(50, 50)).to.be.equal('You can afford this home!');
        });

        it('should throw an error if the first parameter is a string', function () {
            expect(() => findNewApartment.isItAffordable('a', 1)).to.throw(Error);
        });

        it('should throw an error if the first parameter is an array ', function () {
            expect(() => findNewApartment.isItAffordable([], 1)).to.throw(Error);
        });

        it('should throw an error if the first parameter is an object ', function () {
            expect(() => findNewApartment.isItAffordable({}, 1)).to.throw(Error);
        });

        it('should throw an error if the first parameter is undefined ', function () {
            expect(() => findNewApartment.isItAffordable(undefined, 1)).to.throw(Error);
        });

        it('should throw an error if the first parameter is null ', function () {
            expect(() => findNewApartment.isItAffordable(null, 1)).to.throw(Error);
        });

        it('should throw an error if the first parameter is boolean ', function () {
            expect(() => findNewApartment.isItAffordable(true, 1)).to.throw(Error);
        });

        it('should throw an error if the first parameter is a number lower than 0 ', function () {
            expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw(Error);
        });

        it('should throw an error if the first parameter is 0 ', function () {
            expect(() => findNewApartment.isItAffordable(0, 1)).to.throw(Error);
        });

        it('should throw an error if the second parameter is a string ', function () {
            expect(() => findNewApartment.isItAffordable(1, 'a')).to.throw(Error);
        });

        it('should throw an error if the second parameter is an array ', function () {
            expect(() => findNewApartment.isItAffordable(1, [])).to.throw(Error);
        });

        it('should throw an error if the second parameter is an object ', function () {
            expect(() => findNewApartment.isItAffordable(1, {})).to.throw(Error);
        });

        it('should throw an error if the second parameter is undefined ', function () {
            expect(() => findNewApartment.isItAffordable(1, undefined)).to.throw(Error);
        });

        it('should throw an error if the second parameter is null ', function () {
            expect(() => findNewApartment.isItAffordable(1, null)).to.throw(Error);
        });

        it('should throw an error if the second parameter is boolean ', function () {
            expect(() => findNewApartment.isItAffordable(1, true)).to.throw(Error);
        });

        it('should throw an error if the second parameter is a number lower than 0 ', function () {
            expect(() => findNewApartment.isItAffordable(1, -1)).to.throw(Error);
        });

        it('should throw an error if the second parameter is 0 ', function () {
            expect(() => findNewApartment.isItAffordable(1, 0)).to.throw(Error);
        });
    });
});