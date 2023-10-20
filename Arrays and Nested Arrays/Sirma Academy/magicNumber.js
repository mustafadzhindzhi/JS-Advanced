function solve(start, end, magicNumber) {
    let combinations = 0;
    let isFound = false;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinations++;
            if (i + j == magicNumber) {
                console.log(`Combination ${combinations} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if(isFound) {
            break;
        }
    };
    if(!isFound) {
        console.log(`${combinations} Combinations - neighter equals ${magicNumber}`);
    }
};

solve(1,10, 5)