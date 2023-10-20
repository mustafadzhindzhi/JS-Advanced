function biggerHalf(array) {
    array.sort((a, b) => a - b);

    const halfIndex = Math.floor(array.length / 2);
    const biggerH = array.slice(halfIndex);

    return biggerH;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);