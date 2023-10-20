function solve(input) {
    const cars = {};

    const create = (name, parent) => {
        cars[name] = parent ? Object.create(cars[parent]) : {};
    };

    const set = (name, key, value) => {
        cars[name][key] = value;
    };

    const print = (name) => {
        const car = cars[name];
        const result = Object.entries(car).map(([key, value]) => `${key}:${value}`);
        console.log(result.join(', '));
    };

    input.forEach((line) => {
        const [command, name, operation, value] = line.split(' ');

        if (command === 'create') {
            create(name, operation === 'inherit' ? value : null);
        } else if (command === 'set') {
            set(name, operation, value);
        } else if (command === 'print') {
            print(name);
        }
    });
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);