function calorieObject(input) {
    const result = {};

    for (let i = 0; i < input.length; i += 2) {
        const name = input[i];
        const calories = input[i + 1];

        if (result[name]) {
            result[name] += Number(calories);
        }

        result[name] = Number(calories);
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);