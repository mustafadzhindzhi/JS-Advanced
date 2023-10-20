let extensions = (function () {
    function last(array) {
        return array[array.length - 1];
    }

    function skip(array, n) {
        return array.slice(n);
    }

    function take(array, n) {
        if (n < 0 || n >= array.length) {
            throw new RangeError('N must be inside the bounds of the array!');
        }
        return array.slice(0, n);
    }

    function sum(array) {
        return array.reduce((a, b) => a + b, 0);
    }

    function average(array) {
        if (array.length === 0) {
            throw new Error('Array must not be empty!');
        }
        return sum(array) / array.length;
    }

    return {
        last,
        skip,
        take,
        sum,
        average
    };
})();