window.addEventListener('load', solve);

function solve() {
    const firstNameInputElement = document.getElementById('first-name');
    const lastNameInputElement = document.getElementById('last-name');
    const checkInDateInputElement = document.getElementById('date-in');
    const checkOutDateInputElement = document.getElementById('date-out');
    const numberOfGuestsInputElement = document.getElementById('people-count');
    const nextButtonElement = document.getElementById('next-btn');

    nextButtonElement.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();

        if (firstNameInputElement.value === ''
            || lastNameInputElement.value === ''
            || checkInDateInputElement.value === ''
            || checkOutDateInputElement.value === ''
            || numberOfGuestsInputElement.value === ''
            || checkInDateInputElement.value >= checkOutDateInputElement.value) {
            return;
        }

        nextButtonElement.disabled = true;

        const firstName = firstNameInputElement.value;
        const lastName = lastNameInputElement.value;
        const checkInDate = checkInDateInputElement.value;
        const checkOutDate = checkOutDateInputElement.value;
        const numberOfGuests = numberOfGuestsInputElement.value;

        const ulInfoListElement = document.querySelector('.info-list');

        const liElement = document.createElement('li');
        const articleElement = document.createElement('article');
        const h3NameElement = document.createElement('h3');
        const pFromDateElement = document.createElement('p');
        const pToDateElement = document.createElement('p');
        const pForPeopleElement = document.createElement('p');
        const editOrConfirmButtonElement = document.createElement('button');
        const continueOrCancelButtonElement = document.createElement('button');

        liElement.classList = 'reservation-content';
        editOrConfirmButtonElement.classList = 'edit-btn';
        continueOrCancelButtonElement.classList = 'continue-btn';

        h3NameElement.textContent = `Name: ${firstName} ${lastName}`;
        pFromDateElement.textContent = `From date: ${checkInDate}`;
        pToDateElement.textContent = `To date: ${checkOutDate}`;
        pForPeopleElement.textContent = `For ${numberOfGuests} people`;
        editOrConfirmButtonElement.textContent = 'Edit';
        continueOrCancelButtonElement.textContent = 'Continue';

        articleElement.appendChild(h3NameElement);
        articleElement.appendChild(pFromDateElement);
        articleElement.appendChild(pToDateElement);
        articleElement.appendChild(pForPeopleElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(editOrConfirmButtonElement);
        liElement.appendChild(continueOrCancelButtonElement);

        ulInfoListElement.appendChild(liElement);

        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        checkInDateInputElement.value = '';
        checkOutDateInputElement.value = '';
        numberOfGuestsInputElement.value = '';

        editOrConfirmButtonElement.addEventListener('click', onEdit);

        function onEdit() {
            nextButtonElement.disabled = false;

            firstNameInputElement.value = firstName;
            lastNameInputElement.value = lastName;
            checkInDateInputElement.value = checkInDate;
            checkOutDateInputElement.value = checkOutDate;
            numberOfGuestsInputElement.value = numberOfGuests;

            liElement.remove();
        }

        continueOrCancelButtonElement.addEventListener('click', onContinue);

        function onContinue() {
            const ulConfirmListElement = document.querySelector('.confirm-list');

            ulConfirmListElement.appendChild(liElement);
            editOrConfirmButtonElement.textContent = 'Confirm';
            continueOrCancelButtonElement.textContent = 'Cancel';

            editOrConfirmButtonElement.classList = 'confirm-btn';
            continueOrCancelButtonElement.classList = 'cancel-btn';

            editOrConfirmButtonElement.removeEventListener('click', onEdit);
            editOrConfirmButtonElement.addEventListener('click', onConfirm);

            function onConfirm() {
                nextButtonElement.disabled = false;

                liElement.remove();

                const h1VerificationElement = document.getElementById('verification');
                h1VerificationElement.classList = 'reservation-confirmed';
                h1VerificationElement.textContent = 'Confirmed.';
            }

            continueOrCancelButtonElement.removeEventListener('click', onContinue);
            continueOrCancelButtonElement.addEventListener('click', onCancel);

            function onCancel() {
                nextButtonElement.disabled = false;

                liElement.remove();
                const h1VerificationElement = document.getElementById('verification');
                h1VerificationElement.classList = 'reservation-cancelled';
                h1VerificationElement.textContent = 'Cancelled.';
            }
        }
    }
}





