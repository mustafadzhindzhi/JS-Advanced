function sumTable() {
    const tdElements = document.querySelectorAll('td:nth-of-type(2)');
    const tdArray = Array.from(tdElements);

    const sumElement = tdArray.pop();
    sumElement.textContent = tdArray.reduce((acc, curr) => {
        return acc + Number(curr.textContent);
    }, 0);
}