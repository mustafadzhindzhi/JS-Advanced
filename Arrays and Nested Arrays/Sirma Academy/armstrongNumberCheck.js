function solve(n) {
    let numStr = n.toString(); // превръщаме го в стринг защото иначе няма как да определим дължината, дължина на числа няма
    let length = numStr.length;
    let sum = 0;
    let isPalindrome = false;

    for (let i = 0; i < length; i++) {
        const digit = parseInt(numStr[i]); // преобръщаме го в число за да може да направим сметката ни за сумата
        sum += Math.pow(digit, length); // повдигаме си числото от индекса на последнaта ни цифра
    };

    if (sum == n) {
        isPalindrome = true; 
        
    }
    console.log(isPalindrome);
};
solve(123)