function solve(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let sum = 1;
    let prev = 0;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + current;
        sum += next;
        prev = current;
        current = next;
    };
    console.log(sum);
}
solve(3)
