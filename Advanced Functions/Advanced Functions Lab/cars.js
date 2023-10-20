function cars(input) {

    const info = {};

    const result = {
        create: (name, inherits, parentName) => (info[name] = inherits ? Object.create(info[parentName]) : {}),
        set: (name, key, value) => (info[name][key] = value),
        print: (name) => {
            const entry = [];
            for (const key in info[name]) {
                entry.push(`${key}:${info[name][key]}`);
            }
            console.log(entry.join(','));
        },
    };

    input.forEach((line) => {
        const [command, name, key, value] = line.split(' ');
        result[command](name, key, value);
    });
}