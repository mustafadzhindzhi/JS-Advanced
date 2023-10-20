function solve() {
    const textElement = document.getElementById('text');
    const conventionElement = document.getElementById('naming-convention');
    const resultElement = document.getElementById('result');

    const text = textElement.value;
    const convention = conventionElement.value;

    let result = '';
    if (convention === 'Camel Case') {

        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                result += text[i + 1].toUpperCase();
                i++;
            } else {
                result += text[i].toLowerCase();
            }
        }
    } else if (convention === 'Pascal Case') {
        result += text[0].toUpperCase();
        for (let i = 1; i < text.length; i++) {
            if (text[i] === ' ') {
                result += text[i + 1].toUpperCase();
                i++;
            } else {
                result += text[i].toLowerCase();
            }
        }
    } else {
        result = 'Error!';
    }

    resultElement.textContent = result;
}