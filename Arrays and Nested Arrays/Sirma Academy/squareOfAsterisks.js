function asterisks(n) {
    if (n <= 0) {
        console.log(`Invalid number`);
    }

    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            str += '* ';
        }
        console.log(str);
    }
};
asterisks(2)