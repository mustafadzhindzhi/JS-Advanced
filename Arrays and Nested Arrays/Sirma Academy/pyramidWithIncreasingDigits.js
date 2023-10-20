function printPyramid(rows) {
    const maxDigits = rows * 2 - 1;
    for (let i = 1; i <= rows; i++) {
        let row = '';
        let count = i;

        for (let j = 1; j <= i; j++) {
            row += count.toString();
            count++;
        }

        count = count - 2;

        for (let k = 1; k < i; k++) {
            row += count.toString();
            count--;
        }

        const leadingSpaces = Math.floor((maxDigits - row.length) / 2);
        row = ' '.repeat(leadingSpaces) + row;

        console.log(row);
    }
}

printPyramid(5);