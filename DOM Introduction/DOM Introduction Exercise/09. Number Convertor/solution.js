function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');
    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    selectMenuTo.appendChild(binaryOption);

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';
    selectMenuTo.appendChild(hexadecimalOption);

    const convertButton = document.querySelector('button');
    convertButton.addEventListener('click', convertNumber);

    function convertNumber() {
        const input = document.getElementById('input').value;
        const fromSelect = document.getElementById('selectMenuFrom');
        const toSelect = document.getElementById('selectMenuTo');
        const resultInput = document.getElementById('result');

        const from = fromSelect.value;
        const to = toSelect.value;

        if (from === 'decimal') {
            if (to === 'binary') {
                resultInput.value = (+input).toString(2);
            } else if (to === 'hexadecimal') {
                resultInput.value = (+input).toString(16).toUpperCase();
            } else {
                resultInput.value = 'Invalid conversion';
            }
        } else {
            resultInput.value = 'Invalid conversion';
        }
    }
}