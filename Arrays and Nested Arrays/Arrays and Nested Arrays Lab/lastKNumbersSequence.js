function lastKNumbersSequence(n, k) {
    const numbers = [1];

    for (let i = 1; i < n; i++) {
        const index = Math.max(numbers.length - k, 0);
        const finalElements = numbers.slice(index);

        let sum = 0;
        for (const element of finalElements) {
            sum += element;
        }

        numbers.push(sum);
    }

    return numbers;
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);