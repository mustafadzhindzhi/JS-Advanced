function calc() {
    const firstNumInputElement = document.getElementById('num1');
    const secondNumInputElement = document.getElementById('num2');
    const sumInputElement = document.getElementById('sum');

    const sum = Number(firstNumInputElement.value) + Number(secondNumInputElement.value);
    sumInputElement.value = sum;
}
