function townPopulation(data) {
    const townsInfo = {};

    for (const townData of data) {
        const [town, population] = townData.split(' <-> ');

        if (!townsInfo[town]) {
            townsInfo[town] = Number(population);
        } else {
            townsInfo[town] += Number(population);
        }
    }

    for (const town in townsInfo) {
        console.log(`${town} : ${townsInfo[town]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
console.log('---------------');
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);