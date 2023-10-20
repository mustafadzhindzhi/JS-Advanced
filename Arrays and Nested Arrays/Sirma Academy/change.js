function calculateChange(amount) {
    const coinsValue = [200, 100, 50, 20, 10, 5, 2, 1];
    const coins = {};

    amount *= 100;
    for (let i = 0; i < coinsValue.length; i++) {
        const coin = coinsValue[i];
        if (amount >= coin) {
            const count = Math.floor(amount / coin);
            coins[coin / 100] = count;
            amount -= count * coin;
        }
    }
    const totalCoins = Object.values(coins).reduce(
        (total, count) => total + count, 0);
    console.log(`${totalCoins}`);
}
calculateChange(0.56);
