function storeCatalogue(info) {
    const catalogue = new Map();

    info.forEach(line => {
        const [product, price] = line.split(' : ');
        catalogue.set(product, price);
    });

    const sorted = Array.from(catalogue.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    let firstLetter = '';
    sorted.forEach(([product, price]) => {
        if (product[0] !== firstLetter) {
            firstLetter = product[0];
            console.log(firstLetter);
        }

        console.log(`${product}: ${price}`);
    });
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);