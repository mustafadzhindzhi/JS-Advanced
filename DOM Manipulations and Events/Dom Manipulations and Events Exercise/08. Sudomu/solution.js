function solve() {
    const table = document.querySelector('table');
    const quickCheckButton = document.querySelector('tfoot button:first-of-type');
    const clearButton = document.querySelector('tfoot button:last-of-type');
    const checkResult = document.querySelector('#check p');

    quickCheckButton.addEventListener('click', quickCheck);
    clearButton.addEventListener('click', clear);

    function quickCheck() {
        const cells = Array.from(table.querySelectorAll('input'));
        const grid = [];
        let isValid = true;

        for (let i = 0; i < cells.length; i += 3) {
            const row = cells.slice(i, i + 3).map(cell => Number(cell.value));
            if (row.some(isNaN) || new Set(row).size !== 3) {
                isValid = false;
                break;
            }
            grid.push(row);
        }

        if (isValid) {
            const columns = Array.from({ length: 3 }, (_, col) =>
                grid.map(row => row[col])
            );

            for (const column of columns) {
                if (new Set(column).size !== 3) {
                    isValid = false;
                    break;
                }
            }
        }

        checkResult.textContent = isValid ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
    }

    function clear() {
        const cells = Array.from(table.querySelectorAll('input'));
        cells.forEach(cell => {
            cell.value = '';
        });
        checkResult.textContent = '';
    }
}