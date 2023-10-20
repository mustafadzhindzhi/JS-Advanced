function solve() {
    const sectionElements = document.querySelectorAll('section');
    const taskInputElement = document.getElementById('task');
    const descriptionInputElement = document.getElementById('description');
    const dateInputElement = document.getElementById('date');
    const addButtonElement = document.getElementById('add');

    const [addSection, openSection, progressSection, completeSection] = Array.from(sectionElements);

    addButtonElement.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        const taskValue = taskInputElement.value;
        const descriptionValue = descriptionInputElement.value;
        const dateValue = dateInputElement.value;

        if (!taskValue || !descriptionValue || !dateValue) {
            return;
        }

        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const pDescriptionElement = document.createElement('p');
        const pDateElement = document.createElement('p');
        const divElement = document.createElement('div');
        const startButtonElement = document.createElement('button');
        const deleteButtonElement = document.createElement('button');

        divElement.classList = 'flex';
        startButtonElement.classList = 'green';
        deleteButtonElement.classList = 'red';

        h3Element.textContent = taskValue;
        pDescriptionElement.textContent = `Description: ${descriptionValue}`;
        pDateElement.textContent = `Due Date: ${dateValue}`;
        startButtonElement.textContent = 'Start';
        deleteButtonElement.textContent = 'Delete';

        divElement.appendChild(startButtonElement);
        divElement.appendChild(deleteButtonElement);
        articleElement.appendChild(h3Element);
        articleElement.appendChild(pDescriptionElement);
        articleElement.appendChild(pDateElement);
        articleElement.appendChild(divElement);
        openSection.lastElementChild.appendChild(articleElement);

        deleteButtonElement.addEventListener('click', onDelete);

        function onDelete() {
            articleElement.remove();
        }

        startButtonElement.addEventListener('click', onStart);

        function onStart() {
            startButtonElement.remove();
            const finsihElementButton = document.createElement('button');
            finsihElementButton.classList = 'orange';
            finsihElementButton.textContent = 'Finish';
            divElement.appendChild(finsihElementButton);

            progressSection.lastElementChild.appendChild(articleElement);

            finsihElementButton.addEventListener('click', onFinish);
        }

        function onFinish() {
            divElement.remove();
            completeSection.lastElementChild.appendChild(articleElement);
        }
    }
}