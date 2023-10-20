function negativePositiveNumbers(array) {
    const myArr = [];

    for (const number of array) {
        if (number < 0) {
            myArr.unshift(number);
        } else {
            myArr.push(number);
        }
    }

    return myArr.join('\n');
}


console.log(negativePositiveNumbers([7, -2, 8, 9]));
negativePositiveNumbers([3, -2, 0, -1]);