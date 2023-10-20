function getFibonator() {
    let [firstNumber, secondNumber] = [0, 1];

    return () => {
        const sum = firstNumber + secondNumber;
        [firstNumber, secondNumber] = [secondNumber, sum];
        return firstNumber;
    };
}

let fib = getFibonator();
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib());
console.log(fib()); 
console.log(fib()); 
