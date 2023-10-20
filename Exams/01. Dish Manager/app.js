window.addEventListener('load', solve);

function solve() {
    const firstNameInputElement = document.getElementById('first-name');
    const lastNameInputElement = document.getElementById('last-name');
    const ageInputElement = document.getElementById('age');
    const genderSelectElement = document.getElementById('genderSelect');
    const taskTextareaElement = document.getElementById('task');
    const submitButtonElement = document.getElementById('form-btn');
    const counterElement = document.getElementById('progress-count');
    const ulFinishedElement = document.getElementById('finished');
    const clearButtonElement = document.getElementById('clear-btn');

    clearButtonElement.addEventListener('click', onClear);

    function onClear() {
        ulFinishedElement.textContent = '';
    }

    submitButtonElement.addEventListener('click', onSubmit);

    let counter = 0;

    function onSubmit() {
        const firstName = firstNameInputElement.value;
        const lastName = lastNameInputElement.value;
        const age = ageInputElement.value;
        const gender = genderSelectElement.value;
        const dishDescription = taskTextareaElement.value;

        if (firstName === ''
            || lastName === ''
            || age === ''
            || dishDescription === '') {
            return;
        }

        const ulInProgressElement = document.getElementById('in-progress');

        const liElement = document.createElement('li');
        const articleElement = document.createElement('article');
        const h4Element = document.createElement('h4');
        const pGenderElement = document.createElement('p');
        const pDishDescriptionElement = document.createElement('p');
        const editButton = document.createElement('button');
        const completeButton = document.createElement('button');

        liElement.classList = 'each-line';
        editButton.classList = 'edit-btn';
        completeButton.classList = 'complete-btn';

        h4Element.textContent = `${firstName} ${lastName}`;
        pGenderElement.textContent = `${gender}, ${age}`;
        pDishDescriptionElement.textContent = `Dish description: ${dishDescription}`;
        editButton.textContent = 'Edit';
        completeButton.textContent = 'Mark as complete';

        articleElement.appendChild(h4Element);
        articleElement.appendChild(pGenderElement);
        articleElement.appendChild(pDishDescriptionElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButton);
        liElement.appendChild(completeButton);

        ulInProgressElement.appendChild(liElement);

        counter++;
        counterElement.textContent = counter;

        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        ageInputElement.value = '';
        taskTextareaElement.value = '';

        editButton.addEventListener('click', onEdit);

        function onEdit(e) {
            e.currentTarget.parentElement.remove();
            counter--;
            counterElement.textContent = counter;

            firstNameInputElement.value = firstName;
            lastNameInputElement.value = lastName;
            ageInputElement.value = age;
            genderSelectElement.value = gender;
            taskTextareaElement.value = dishDescription;
        }

        completeButton.addEventListener('click', onComplete);

        function onComplete() {
            ulFinishedElement.appendChild(liElement);

            counter--;
            counterElement.textContent = counter;

            liElement.removeChild(editButton);
            liElement.removeChild(completeButton);
        }
    }
}
