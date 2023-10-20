function solve(str) {
    let isPalindrome = true;
    const length = str.length;

    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) { 
            isPalindrome = false;
            break;
        }
    };
    console.log(isPalindrome);
};
solve('radar')