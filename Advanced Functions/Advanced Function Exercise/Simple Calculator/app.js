function calculator() {
    let firstInputElement;
    let secondInputElement;
    let resultInputElement;

    function init(selector1, selector2, resultSelector) {
        firstInputElement = document.querySelector(selector1);
        secondInputElement = document.querySelector(selector2);
        resultInputElement = document.querySelector(resultSelector);
    }

    function add() {
        resultInputElement.value = Number(firstInputElement.value) + Number(secondInputElement.value);
    }

    function subtract() {
        resultInputElement.value = Number(firstInputElement.value) - Number(secondInputElement.value);

    }

    return {
        init,
        add,
        subtract,
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





