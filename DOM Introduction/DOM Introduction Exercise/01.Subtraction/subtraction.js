$(document).ready(function () {
    $('#subtractButton').on('click', function () {
        subtract();
    });

    function subtract() {
        const firstNumberElement = $('#firstNumber').val();
        const secondNumberElement = $('#secondNumber').val();
        const resultElement = $('#result');

        if (!isNaN(firstNumberElement) && !isNaN(secondNumberElement)) {
            const totalSum = parseFloat(firstNumberElement) - parseFloat(secondNumberElement);
            resultElement.text('Result: ' + totalSum.toFixed(2)); 
        } else {
            resultElement.text('Invalid input. Please enter valid numbers.');
        }
    }
});