function lowestPricesInCities(data) {
    const result = {};

    for (const line of data) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = { town, price };
        } else {
            if (result[product].price > price) {
                result[product] = { price, town };
            }
        }
    }

    for (const [product, info] of Object.entries(result)) {
        console.log(`${product} -> ${info.price} (${info.town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);