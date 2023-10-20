function smallestTwoNumbers(array) {
    array.sort((a, b) => a - b);
    const smallestTwoNums = array
        .slice(0, 2)
        .join(' ');

    console.log(smallestTwoNums);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);