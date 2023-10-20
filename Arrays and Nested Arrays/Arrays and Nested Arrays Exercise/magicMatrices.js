function magicMatrices(matrix) {
    let rowSum = 0;
    let columnSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        const currentArray = matrix[i].join('');
        for (let j = 0; j < currentArray.length; j++) {
            rowSum += Number(currentArray[j]);
            columnSum += Number(currentArray[0]);
        }
    }

    if (rowSum === columnSum) {
        console.log('true');
    } else {
        console.log('false');
    }
}

magicMatrices(
    [[4, 5, 6], // 0 0 - 0 1 - 0 2
    [6, 5, 4],  // 1 0 - 1 1 - 1 2
    [5, 5, 5]]  // 2 0 - 2 1 - 2 2
);
console.log('---------------');
magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);