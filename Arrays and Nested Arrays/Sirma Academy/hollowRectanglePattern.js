function solve(n, m) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        if (i === 1 || i === n) {
            row = '*'.repeat(m);
        } else {
            row = '*' + ' '.repeat(m - 2) + '*';
        };
        console.log(row);
    }
};

solve(4, 6)