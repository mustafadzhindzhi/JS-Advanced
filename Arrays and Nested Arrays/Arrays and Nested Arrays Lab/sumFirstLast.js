function sumFirstLast(array) {
    const sum = Number(array[0]) + Number(array[array.length - 1]);

    return sum;
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);