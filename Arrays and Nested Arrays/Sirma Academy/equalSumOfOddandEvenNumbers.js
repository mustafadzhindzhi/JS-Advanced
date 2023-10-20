function solve(firstN, secondN) {
    let result = ``;
    let sumCc = 0;
    let sumNh = 0;
    for (let currNum = firstN + 1; currNum < secondN; currNum++) {

        let num = currNum.toString();
        sumCc = Number(num[0]) + Number(num[2]) + Number(num[4]);
        sumNh = Number(num[1]) + Number(num[3]) + Number(num[5]);
        if (sumCc === sumNh)
            result += `${num} `;

    }
    if (result) {
        console.log(result);
    } else {
        console.log('None');
    }
}
solve(100000, 100050)