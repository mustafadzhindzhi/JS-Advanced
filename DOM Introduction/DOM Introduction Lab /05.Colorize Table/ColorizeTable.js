function colorize() {
    const tdElements = document.querySelectorAll('tr:nth-of-type(2n)');
    const tdArray = Array.from(tdElements);
    tdArray.forEach(el => {
        el.style.backgroundColor = 'teal';
    });
}