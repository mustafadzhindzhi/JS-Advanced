function subSum(array, firstIndex, secondIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    const startIndex = Math.max(0, firstIndex);
    const endIndex = Math.min(array.length, secondIndex);

    const slicedArray = array.slice(startIndex, endIndex + 1);
    const sum = slicedArray.reduce((acc, curr) => acc + Number(curr), 0);

    return sum;
}

console.log(subSum('text', 0, 2));