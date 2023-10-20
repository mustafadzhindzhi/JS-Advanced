function housePattern(n) {
    housePyramid(n);
    houseLegs(n);
};

function housePyramid(n) {
    if (n % 2 === 1 && n > 0) {
        const roofHeight = Math.floor(n / 2) + 1;

        for (let i = 1; i <= roofHeight; i++) {
            const spaces = roofHeight - i;
            let pattern = ' ';
            for (let j = 0; j < spaces; j++) {
                pattern += '  ';
            }
            for (let k = 0; k < i * 2 - 1; k++) {
                pattern += '*';
                if (k < i * 2 - 2) {
                    pattern += ' ';
                }
            }
            console.log(pattern);
        }
    } else if (n % 2 === 0) {
        const roofHeight = Math.floor(n / 2) + 1;
        for (let i = 1; i < roofHeight; i++) {
            const spaces = roofHeight - i;
            let pattern = ' ';
            for (let j = 0; j < spaces; j++) {
                pattern += '  ';
            }
            for (let k = 0; k < i * 2; k++) {
                pattern += '*';
                if (k < i * 2 - 1) {
                    pattern += ' ';
                }
            }
            console.log(pattern);
        }
    }
}

function houseLegs(n) {
    for (let i = 1; i <= 1; i++) {
        let pattern = ' *    ';
        for (let j = 2; j <= n; j++) {
            if (j === 1 || j === n) {
                pattern += '  *';
            } else {
                pattern += ' ';
            }
        };
        console.log(pattern);
    }
}

// Example usage with n = 5
housePattern(7);
housePattern(4);

