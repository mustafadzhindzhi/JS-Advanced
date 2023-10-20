function calculateRageExpenses(lostGames, prices) {
    const [headsetPrice, mousePrice, keyboardPrice, displayPrice] = prices;

    const trashedHeadset = Math.floor(lostGames / 2);
    const trashedMouse = Math.floor(lostGames / 3);
    const trashedKeyboard = Math.floor(lostGames / 6);
    const trashedDisplay = Math.floor(trashedKeyboard / 2);

    const headSetExpense = trashedHeadset * headsetPrice;
    const mouseExpense = trashedMouse * mousePrice;
    const keyboardExpense = trashedKeyboard * keyboardPrice;
    const displayExpense = trashedDisplay * displayPrice;

    const totalExpenses = headSetExpense + mouseExpense + keyboardExpense + displayExpense;
    return totalExpenses;
}

function solve(lostGames, ...prices) {
    const totalExpenses = calculateRageExpenses(lostGames, prices);
    console.log(`Rage expenses: ${totalExpenses} lv.`);
}

solve(7, 2, 3, 4, 5);