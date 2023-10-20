function addItem() {
    const ulElement = document.getElementById('items');
    const textInputElement = document.getElementById('newItemText');
    const text = textInputElement.value.trim();

    if (text === '') {
        return; 
    }

    const liElement = document.createElement('li');
    liElement.textContent = text;
    textInputElement.value = '';

    const deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';

    deleteElement.addEventListener('click', () => {
        liElement.remove();
    });

    liElement.appendChild(deleteElement);
    ulElement.appendChild(liElement);
}