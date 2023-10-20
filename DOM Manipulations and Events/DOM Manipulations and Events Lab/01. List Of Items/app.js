function addItem() {
    const ulElement = document.getElementById('items');
    const textInputElement = document.getElementById('newItemText');

    const liElement = document.createElement('li');
    liElement.textContent = textInputElement.value;

    ulElement.appendChild(liElement);
}