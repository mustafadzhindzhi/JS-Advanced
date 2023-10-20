function extractText() {
    const ulElement = document.getElementById('items');
    const textareaElement = document.getElementById('result');

    textareaElement.textContent = ulElement.textContent;   
}