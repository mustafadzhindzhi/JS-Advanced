const movieTheater = require('./03. Movie Theater _Resources');
const { expect } = require('chai');

describe('movieTheater object tests', () => {
    describe('ageRestrictions method tests', () => {
        it('should return "All ages admitted to watch the movie" if the value of the parameter is "G"', () => {
            expect(movieTheater.ageRestrictions('G')).to.be.equal('All ages admitted to watch the movie');
        });

        it('should return "Parental guidance suggested! Some material may not be suitable for pre-teenagers" if the value of the parameter is "PG"', () => {
            expect(movieTheater.ageRestrictions('PG')).to.be.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        });

        it('should return "Restricted! Under 17 requires accompanying parent or adult guardian" if the value of the parameter is "R"', () => {
            expect(movieTheater.ageRestrictions('R')).to.be.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        });

        it('should return "No one under 17 admitted to watch the movie" if the value of the parameter is "NC-17"', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.be.equal('No one under 17 admitted to watch the movie');
        });

        it('should return "There are no age restrictions for this movie" with wrong parameter', () => {
            expect(movieTheater.ageRestrictions('a')).to.be.equal('There are no age restrictions for this movie');
        });
    });

    describe('moneySpent method tests', () => {
        it('should return "The total cost for the purchase is ${totalCost}"', () => {
            expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.be.equal('The total cost for the purchase is 23.50');
        });

        it('should return "The total cost for the purchase with applied discount is ${totalCost}"', () => {
            expect(movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.be.equal('The total cost for the purchase with applied discount is 59.60');
        });

        it('should return "The total cost for the purchase with applied discount is ${totalCost}"', () => {
            expect(movieTheater.moneySpent(4, ['Nachos'], [])).to.be.equal('The total cost for the purchase with applied discount is 52.80');
        });

        it('should return "The total cost for the purchase is ${totalCost}"', () => {
            expect(movieTheater.moneySpent(1, [], ['Soda'])).to.be.equal('The total cost for the purchase is 17.50');
        });

        it('should return "The total cost for the purchase is ${totalCost}"', () => {
            expect(movieTheater.moneySpent(0, [], [])).to.be.equal('The total cost for the purchase is 0.00');
        });

        it('should throw an error if the first parameter is a string', function () {
            expect(() => movieTheater.moneySpent('a', [], [])).to.throw(Error);
        });

        it('should throw an error if the first parameter is an array', function () {
            expect(() => movieTheater.moneySpent([], [], [])).to.throw(Error);
        });

        it('should throw an error if the first parameter is an object', function () {
            expect(() => movieTheater.moneySpent({}, [], [])).to.throw(Error);
        });

        it('should throw an error if the first parameter is undefined', function () {
            expect(() => movieTheater.moneySpent(undefined, [], [])).to.throw(Error);
        });

        it('should throw an error if the first parameter is null', function () {
            expect(() => movieTheater.moneySpent(null, [], [])).to.throw(Error);
        });

        it('should throw an error if the first parameter is boolean', function () {
            expect(() => movieTheater.moneySpent(false, [], [])).to.throw(Error);
        });

        it('should throw an error if the second parameter is a string', function () {
            expect(() => movieTheater.moneySpent(1, 'a', [])).to.throw(Error);
        });

        it('should throw an error if the second parameter is a number', function () {
            expect(() => movieTheater.moneySpent(1, 1, [])).to.throw(Error);
        });

        it('should throw an error if the second parameter is an object', function () {
            expect(() => movieTheater.moneySpent(1, {}, [])).to.throw(Error);
        });

        it('should throw an error if the second parameter is undefined', function () {
            expect(() => movieTheater.moneySpent(1, undefined, [])).to.throw(Error);
        });

        it('should throw an error if the second parameter is null', function () {
            expect(() => movieTheater.moneySpent(1, null, [])).to.throw(Error);
        });

        it('should throw an error if the second parameter is boolean', function () {
            expect(() => movieTheater.moneySpent(1, true, [])).to.throw(Error);
        });

        it('should throw an error if the third parameter is a string', function () {
            expect(() => movieTheater.moneySpent(1, [], 'a')).to.throw(Error);
        });

        it('should throw an error if the third parameter is a number', function () {
            expect(() => movieTheater.moneySpent(1, [], 1)).to.throw(Error);
        });

        it('should throw an error if the third parameter is an object', function () {
            expect(() => movieTheater.moneySpent(1, [], {})).to.throw(Error);
        });

        it('should throw an error if the third parameter is undefined', function () {
            expect(() => movieTheater.moneySpent(1, [], undefined)).to.throw(Error);
        });

        it('should throw an error if the third parameter is null', function () {
            expect(() => movieTheater.moneySpent(1, [], null)).to.throw(Error);
        });

        it('should throw an error if the third parameter is boolean', function () {
            expect(() => movieTheater.moneySpent(1, [], false)).to.throw(Error);
        });
    });

    describe('reservation method tests', () => {
        it('should return the row with the largest number', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 2 }], 7)).to.be.equal(1);
        });

        it('should return an error if the first parameter is a string', function () {
            expect(() => movieTheater.reservation('a', 1)).to.throw(Error);
        });

        it('should return an error if the first parameter is a number', function () {
            expect(() => movieTheater.reservation(1, 1)).to.throw(Error);
        });

        it('should return an error if the first parameter is an object', function () {
            expect(() => movieTheater.reservation({}, 1)).to.throw(Error);
        });

        it('should return an error if the first parameter is undefined', function () {
            expect(() => movieTheater.reservation(undefined, 1)).to.throw(Error);
        });

        it('should return an error if the first parameter is null', function () {
            expect(() => movieTheater.reservation(null, 1)).to.throw(Error);
        });

        it('should return an error if the first parameter is boolean', function () {
            expect(() => movieTheater.reservation(true, 1)).to.throw(Error);
        });

        it('should return an error if the second parameter is a string', function () {
            expect(() => movieTheater.reservation([], 'a')).to.throw(Error);
        });

        it('should return an error if the second parameter is an array', function () {
            expect(() => movieTheater.reservation([], [])).to.throw(Error);
        });

        it('should return an error if the second parameter is an object', function () {
            expect(() => movieTheater.reservation([], {})).to.throw(Error);
        });

        it('should return an error if the second parameter is undefined', function () {
            expect(() => movieTheater.reservation([], undefined)).to.throw(Error);
        });

        it('should return an error if the second parameter is null', function () {
            expect(() => movieTheater.reservation([], null)).to.throw(Error);
        });

        it('should return an error if the second parameter is boolean', function () {
            expect(() => movieTheater.reservation([], false)).to.throw(Error);
        });
    });
});