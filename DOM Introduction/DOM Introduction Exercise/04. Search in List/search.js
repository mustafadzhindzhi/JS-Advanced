function search() {
    const liElements = document.querySelectorAll('#towns li');
    const inputElement = document.getElementById('searchText');
    const resultElement = document.getElementById('result');

    const towns = Array.from(liElements);

    let match = 0;
    for (const town of towns) {
        if (town.textContent.includes(inputElement.value) && inputElement.value !== '') {
            match++;
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
        } else {
            town.style.fontWeight = '';
            town.style.textDecoration = 'none';
        }
    }

    resultElement.textContent = `${match} matches found`;
}
