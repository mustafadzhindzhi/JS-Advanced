function solve(car) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const carriages = [
        { type: 'hatchback', color: car.color },
        { type: 'coupe', color: car.color }
    ];

    const wheelsSize = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;

    return {
        model: car.model,
        engine: engines.find(e => e.power >= car.power),
        carriage: carriages.find(c => c.type === car.carriage),
        wheels: [wheelsSize, wheelsSize, wheelsSize, wheelsSize]
    };
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));