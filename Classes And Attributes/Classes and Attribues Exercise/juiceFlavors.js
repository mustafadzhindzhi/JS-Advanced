function juiceFlavors(arr) {
    const juices = {};
    const bottles = {};

    for (const line of arr) {
        let [name, quantity] = line.split(' => ');
        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }

        juices[name] += Number(quantity);

        if (juices[name] >= 1000) {
            const bottlesCount = Math.floor(juices[name] / 1000);
            if (!bottles.hasOwnProperty(name)) {
                bottles[name] = 0;
            }

            bottles[name] += bottlesCount;
            juices[name] -= bottlesCount * 1000;
        }
    }

    Object.entries(bottles).forEach((juiceBottle) => console.log(`${juiceBottle[0]} => ${juiceBottle[1]}`));
}