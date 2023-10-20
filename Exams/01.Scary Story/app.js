window.addEventListener('load', solve);

function solve() {
    const firstNameInputElement = document.getElementById('first-name');
    const lastNameInputElement = document.getElementById('last-name');
    const ageInputElement = document.getElementById('age');
    const storyTitleInputElement = document.getElementById('story-title');
    const genreSelectElement = document.getElementById('genre');
    const storyTextareaElement = document.getElementById('story');
    const publishButtonElement = document.getElementById('form-btn');

    publishButtonElement.addEventListener('click', onClick);

    function onClick(e) {
        const firstName = firstNameInputElement.value;
        const lastName = lastNameInputElement.value;
        const age = ageInputElement.value;
        const storyTitle = storyTitleInputElement.value;
        const genre = genreSelectElement.value;
        const storyText = storyTextareaElement.value;

        if (firstName === ''
            || lastName === ''
            || age === ''
            || storyTitle === ''
            || storyText === '') {
            return;
        }

        publishButtonElement.disabled = true;

        const ulPreviewListElement = document.getElementById('preview-list');

        const liElement = document.createElement('li');
        const articleElement = document.createElement('article');
        const h4Element = document.createElement('h4');
        const pAgeElement = document.createElement('p');
        const pTitleElement = document.createElement('p');
        const pGenreElement = document.createElement('p');
        const pStoryText = document.createElement('p');
        const saveButton = document.createElement('button');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        liElement.classList = 'story-info';
        saveButton.classList = 'save-btn';
        editButton.classList = 'edit-btn';
        deleteButton.classList = 'delete-btn';

        h4Element.textContent = `Name: ${firstName} ${lastName}`;
        pAgeElement.textContent = `Age: ${age}`;
        pTitleElement.textContent = `Title: ${storyTitle}`;
        pGenreElement.textContent = `Genre: ${genre}`;
        pStoryText.textContent = `${storyText}`;
        saveButton.textContent = 'Save Story';
        editButton.textContent = 'Edit Story';
        deleteButton.textContent = 'Delete Story';

        articleElement.appendChild(h4Element);
        articleElement.appendChild(pAgeElement);
        articleElement.appendChild(pTitleElement);
        articleElement.appendChild(pGenreElement);
        articleElement.appendChild(pStoryText);

        liElement.appendChild(articleElement);
        liElement.appendChild(saveButton);
        liElement.appendChild(editButton);
        liElement.appendChild(deleteButton);

        ulPreviewListElement.appendChild(liElement);

        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        ageInputElement.value = '';
        storyTitleInputElement.value = '';
        storyTextareaElement.value = '';

        editButton.addEventListener('click', onEdit);

        function onEdit() {
            liElement.remove();

            publishButtonElement.disabled = false;

            firstNameInputElement.value = firstName;
            lastNameInputElement.value = lastName;
            ageInputElement.value = age;
            storyTitleInputElement.value = storyTitle;
            genreSelectElement.value = genre;
            storyTextareaElement.value = storyText;
        }

        saveButton.addEventListener('click', onSave);

        function onSave() {
            const divElement = document.getElementById('main');
            divElement.textContent = '';

            const h1Element = document.createElement('h1');
            h1Element.textContent = 'Your scary story is saved!';

            divElement.appendChild(h1Element);
        }

        deleteButton.addEventListener('click', onDelete);

        function onDelete() {
            liElement.remove();
            publishButtonElement.disabled = false;
        }
    }
}
