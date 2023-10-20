const chooseYourCar = require('./chooseYourCar');
const { expect } = require('chai');

describe('chooseYourCar object tests', () => {
    describe('choosingType method tests', () => {
        it('should throw an error if the year is less than 1900', function () {
            expect(() => chooseYourCar.choosingType('a', 'a', 1899.9)).to.throw(Error);
        });

        it('should throw an error if the year is more than 2022', function () {
            expect(() => chooseYourCar.choosingType('a', 'a', 2022.1)).to.throw(Error);
        });

        it('should throw an error if the value of the type is not Sedan', function () {
            expect(() => chooseYourCar.choosingType('Bus', 'a', 1901)).to.throw(Error);
        });

        it('should return "This red sedan meets the requirements, that you have.", if the year is greater than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2011)).to.be.equal('This red Sedan meets the requirements, that you have.');
        });

        it('should return "This red sedan meets the requirements, that you have.", if the year is 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.be.equal('This red Sedan meets the requirements, that you have.');
        });

        it('should return "This Sedan is too old for you, especially with that red color.", if the year is lower than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.be.equal('This Sedan is too old for you, especially with that red color.');
        });
    });

    describe('brandName method tests', () => {
        it('should remove the element on the given index', () => {
            expect(chooseYourCar.brandName(['BMW', 'Audi'], 1)).to.be.equal('BMW');
        });

        it('should remove the element on the given index', () => {
            expect(chooseYourCar.brandName(['BMW'], 0)).to.be.equal('');
        });

        it('should return the array joined by ", "', () => {
            expect(chooseYourCar.brandName(['BMW', 'Audi', 'Toyota'], 2)).to.be.equal('BMW, Audi');
        });

        it('should throw an error if the first parameter is a string', function () {
            expect(() => chooseYourCar.brandName('a', 1)).throw(Error);
        });

        it('should throw an error if the first parameter is a number', function () {
            expect(() => chooseYourCar.brandName(1, 1)).throw(Error);
        });

        it('should throw an error if the first parameter is an object', function () {
            expect(() => chooseYourCar.brandName({}, 1)).throw(Error);
        });

        it('should throw an error if the first parameter is undefined', function () {
            expect(() => chooseYourCar.brandName(undefined, 1)).throw(Error);
        });

        it('should throw an error if the first parameter is null', function () {
            expect(() => chooseYourCar.brandName(null, 1)).throw(Error);
        });

        it('should throw an error if the first parameter is boolean', function () {
            expect(() => chooseYourCar.brandName(false, 1)).throw(Error);
        });

        it('should throw an error if the index is bigget than the array\'s length', function () {
            expect(() => chooseYourCar.brandName(['BMW'], 1)).to.throw(Error);
        });

        it('should throw an error if the index is lower than 0', function () {
            expect(() => chooseYourCar.brandName(['BMW'], -1)).to.throw(Error);
        });

        it('should throw an error if the second parameter is a string', function () {
            expect(() => chooseYourCar.brandName([], 'a')).to.throw(Error);
        });

        it('should throw an error if the second parameter is an array', function () {
            expect(() => chooseYourCar.brandName([], [])).to.throw(Error);
        });

        it('should throw an error if the second parameter is an object', function () {
            expect(() => chooseYourCar.brandName([], {})).to.throw(Error);
        });

        it('should throw an error if the second parameter is undefined', function () {
            expect(() => chooseYourCar.brandName([], undefined)).to.throw(Error);
        });

        it('should throw an error if the second parameter is null', function () {
            expect(() => chooseYourCar.brandName([], null)).to.throw(Error);
        });

        it('should throw an error if the second parameter is boolean', function () {
            expect(() => chooseYourCar.brandName([], true)).to.throw(Error);
        });
    });

    describe('carFuelConsumption method tests', () => {
        it('"The car burns too much fuel - ${litersPerHundredKm} liters!" if the liters are bigger than 7', () => {
            expect(chooseYourCar.carFuelConsumption(100, 9)).to.be.equal('The car burns too much fuel - 9.00 liters!');
        });

        it('should return "The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km." if the liters are 7', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });

        it('should return "The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km." if the liters are less than 7', () => {
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.be.equal('The car is efficient enough, it burns 6.00 liters/100 km.');
        });

        it('should return and error if the first parameter is a string', function () {
            expect(() => chooseYourCar.carFuelConsumption('1', 1)).to.throw(Error);
        });

        it('should return and error if the first parameter is an array', function () {
            expect(() => chooseYourCar.carFuelConsumption([], 1)).to.throw(Error);
        });

        it('should return and error if the first parameter is an object', function () {
            expect(() => chooseYourCar.carFuelConsumption({}, 1)).to.throw(Error);
        });

        it('should return and error if the first parameter is undefined', function () {
            expect(() => chooseYourCar.carFuelConsumption(undefined, 1)).to.throw(Error);
        });

        it('should return and error if the first parameter is null', function () {
            expect(() => chooseYourCar.carFuelConsumption(null, 1)).to.throw(Error);
        });

        it('should return and error if the first parameter is boolean', function () {
            expect(() => chooseYourCar.carFuelConsumption(false, 1)).to.throw(Error);
        });

        it('should return and error if the first parameter is a negative number', function () {
            expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw(Error);
        });

        it('should return and error if the first parameter is 0', function () {
            expect(() => chooseYourCar.carFuelConsumption(0, 1)).to.throw(Error);
        });

        it('should return and error if the second parameter is a string', function () {
            expect(() => chooseYourCar.carFuelConsumption(1, 'a')).to.throw(Error);
        });

        it('should return and error if the second parameter is an array', function () {
            expect(() => chooseYourCar.carFuelConsumption(1, [])).to.throw(Error);
        });

        it('should return and error if the second parameter is an object', function () {
            expect(() => chooseYourCar.carFuelConsumption(1, {})).to.throw(Error);
        });

        it('should return and error if the second parameter is undefined', function () {
            expect(() => chooseYourCar.carFuelConsumption(1, undefined)).to.throw(Error);
        });

        it('should return and error if the second parameter is a null', function () {
            expect(() => chooseYourCar.carFuelConsumption(1, null)).to.throw(Error);
        });

        it('should return and error if the second parameter is boolean', function () {
            expect(() => chooseYourCar.carFuelConsumption(1, true)).to.throw(Error);
        });

        it('should return and error if the second parameter is a negative number', function () {
            expect(() => chooseYourCar.carFuelConsumption(1, -1)).to.throw(Error);
        });

        it('should return and error if the second parameter is 0', function () {
            expect(() => chooseYourCar.carFuelConsumption(1, 0)).to.throw(Error);
        });
    });
});