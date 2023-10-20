function printEveryNthElementFromAnArray(array, step) {
    const myArr = [];

    for (let i = 0; i < array.length; i += step) {
        myArr.push(array[i]);
    }

    return myArr;
}

console.log(printEveryNthElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));