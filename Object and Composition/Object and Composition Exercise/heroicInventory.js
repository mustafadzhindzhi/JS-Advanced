function heroicInventory(data) {
    const result = data.map(line => {
        const [heroName, level, items] = line.split(' / ');

        return {
            name: heroName,
            level: Number(level),
            items: items ? items.split(', ') : [],
        };
    });

    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));