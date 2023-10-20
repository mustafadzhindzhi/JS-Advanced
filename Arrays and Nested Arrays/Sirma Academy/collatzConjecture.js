function solve(n) {
    let template = '';
    while (n !== 1) {
        template += n + ' ';

        if (n % 2 == 0) {
            n = n / 2
        } else {
            n = (n * 3) + 1;
        };
    };
    console.log(template);
}

solve(6)