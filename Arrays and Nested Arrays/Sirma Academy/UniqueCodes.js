function uniqueCodes(n1, n2, n3) {
    for (let i = 2; i <= n1; i += 2) {
        for (let j = 2; j <= n2; j++) {
            for (let k = 2; k <= n3; k += 2) {
                if (j === 2 || j === 3 || j === 5 || j === 7) {
                    console.log(`${i}${j}${k}`);
                }
            }
        };
    }
};
uniqueCodes(3, 5, 5)