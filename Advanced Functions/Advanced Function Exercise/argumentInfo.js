function argumentInfo(...args) {
    let counts = {};

    for (let arg of args) {
        const argType = typeof arg;

        console.log(`${argType}: ${arg}`);

        counts[argType] = (counts[argType] || 0) + 1;
    }

    Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .forEach(([type, count]) => console.log(`${type} = ${count}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });