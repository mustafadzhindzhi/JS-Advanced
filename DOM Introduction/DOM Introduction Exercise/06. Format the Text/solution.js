function solve() {
    const textareaElement = document.getElementById('input');
    const resultDiv = document.getElementById('output');

    const inputText = textareaElement.value.split('.').filter(Boolean);

    const paragraphs = inputText.map(sentence => {
        const p = document.createElement('p');
        p.textContent = sentence.trim() + '.';
        return p;
    });

    resultDiv.innerHTML = ''; 

    paragraphs.forEach(p => resultDiv.appendChild(p));
}