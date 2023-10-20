function leftArrow(n) {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 0; j < n - i; j++) { 
            pattern += ' ';
        }
        for (let k = 0; k < i; k++) {
            pattern += '*';
        };
        console.log(pattern);
    };
    for (let i = 1; i <= n - 1; i++) {
        let pattern = ''
        for (let j = 0; j < i; j++) {
            pattern += ' ';
        };
        for (let k = 0; k < n - i; k++) { 
            pattern += '*';
        };
        console.log(pattern);
    }
};

leftArrow(5);