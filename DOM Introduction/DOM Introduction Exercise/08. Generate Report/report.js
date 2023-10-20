function generateReport() {
    const outputElement = document.querySelector('#output');
    const tbodyElements = Array.from(document.querySelectorAll('tbody tr'));
    const checkElements = Array.from(document.querySelectorAll('thead tr th input'));

    const finalResult = [];

    tbodyElements.forEach(row => {
        const current = {};

        Array.from(row.querySelectorAll('td')).forEach((el, i) => {
            if (checkElements[i].checked) {
                current[checkElements[i].name] = el.textContent;
            }
        });

        finalResult.push(current);
    });

    outputElement.value = JSON.stringify(finalResult);
}