function create(sentences) {
    const contentDivElement = document.getElementById('content');

    sentences.forEach((sentence) => {
        const divElement = document.createElement('div');
        divElement.addEventListener('click', function () {
            const pElement = this.querySelector('p');
            pElement.style.display = 'block';
        });

        const pElement = document.createElement('p');
        pElement.textContent = sentence;
        pElement.style.display = 'none';

        divElement.appendChild(pElement);
        contentDivElement.appendChild(divElement);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    create(['Section 1', 'Section 2', 'Section 3', 'Section 4']);
});