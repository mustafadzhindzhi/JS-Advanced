function cityRecord(name, population, treasury) {
    return {
        name,
        population,
        treasury,
    };
}

const town = cityRecord('Tortuga', 7000, 15000);
console.log(town);