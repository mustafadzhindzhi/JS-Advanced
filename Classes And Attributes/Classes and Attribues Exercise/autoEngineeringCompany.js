function autoEngineeringCompany(array) {
    const cars = {};

    array.forEach(line => {
        const [brand, model, producedCars] = line.split(' | ');

        if (cars[brand] === undefined) {
            cars[brand] = {};
        }
        
        if (cars[brand][model] === undefined) {
            cars[brand][model] = 0;
        }

        cars[brand][model] += Number(producedCars);
    });

    for (const currentBrand in cars) {
        console.log(currentBrand);
        Object.entries(cars[currentBrand]).forEach(model => console.log(`###${model[0]} -> ${model[1]}`))
    }
}