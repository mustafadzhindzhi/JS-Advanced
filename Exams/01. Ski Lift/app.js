window.addEventListener('load', solve);

function solve() {
    const firstNameInputElement = document.getElementById('first-name');
    const lastNameInputElement = document.getElementById('last-name');
    const numberOfPeopleInputElement = document.getElementById('people-count');
    const fromDateInputElement = document.getElementById('from-date');
    const daysInputElement = document.getElementById('days-count');
    const nextStepButton = document.getElementById('next-btn');

    nextStepButton.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        const firstName = firstNameInputElement.value;
        const lastName = lastNameInputElement.value;
        const numberOfPeople = numberOfPeopleInputElement.value;
        const fromDate = fromDateInputElement.value;
        const daysCount = daysInputElement.value;

        if (firstName === '' || lastName === '' || numberOfPeople === '' || fromDate === '' || daysCount === '') {
            return;
        }

        const ulTicketInfoList = document.querySelector('.ticket-info-list');

        const liElement = document.createElement('li');
        const articleElement = document.createElement('article');
        const h3NameElement = document.createElement('h3');
        const pFromDateElement = document.createElement('p');
        const pForDaysElement = document.createElement('p');
        const pForPeopleElement = document.createElement('p');
        const editButtonElement = document.createElement('button');
        const continueButtonElement = document.createElement('button');

        liElement.classList = 'ticket';
        editButtonElement.classList = 'edit-btn';
        continueButtonElement.classList = 'continue-btn';

        h3NameElement.textContent = `Name: ${firstName} ${lastName}`;
        pFromDateElement.textContent = `From date: ${fromDate}`;
        pForDaysElement.textContent = `For ${daysCount} days`;
        pForPeopleElement.textContent = `For ${numberOfPeople} people`;
        editButtonElement.textContent = 'Edit';
        continueButtonElement.textContent = 'Continue';

        articleElement.appendChild(h3NameElement);
        articleElement.appendChild(pFromDateElement);
        articleElement.appendChild(pForDaysElement);
        articleElement.appendChild(pForPeopleElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(continueButtonElement);

        ulTicketInfoList.appendChild(liElement);

        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        numberOfPeopleInputElement.value = '';
        fromDateInputElement.value = '';
        daysInputElement.value = '';

        nextStepButton.disabled = true;

        editButtonElement.addEventListener('click', onEdit);

        function onEdit() {
            firstNameInputElement.value = firstName;
            lastNameInputElement.value = lastName;
            numberOfPeopleInputElement.value = numberOfPeople;
            fromDateInputElement.value = fromDate;
            daysInputElement.value = daysCount;

            nextStepButton.disabled = false;

            liElement.remove();
        }

        continueButtonElement.addEventListener('click', onContinue);

        function onContinue() {
            const ulConfirmTicketElement = document.querySelector('.confirm-ticket');

            ulConfirmTicketElement.appendChild(liElement);
            liElement.removeChild(editButtonElement);
            liElement.removeChild(continueButtonElement);

            const confirmButtonElement = document.createElement('button');
            const cancelButtonElement = document.createElement('button');

            confirmButtonElement.classList = 'confirm-btn';
            cancelButtonElement.classList = 'cancel-btn';

            confirmButtonElement.textContent = 'Confirm';
            cancelButtonElement.textContent = 'Cancel';

            liElement.appendChild(confirmButtonElement);
            liElement.appendChild(cancelButtonElement);

            cancelButtonElement.addEventListener('click', onCancel);

            function onCancel() {
                liElement.remove();
                nextStepButton.disabled = false;
            }

            confirmButtonElement.addEventListener('click', onConfrim);

            function onConfrim() {
                const body = document.getElementById('body');
                const mainDivElement = document.getElementById('main');
                body.removeChild(mainDivElement);

                const h1Element = document.createElement('h1');
                const backButtonElement = document.createElement('button');

                h1Element.id = 'thank-you';
                h1Element.textContent = 'Thank you, have a nice day!';

                backButtonElement.id = 'back-btn';
                backButtonElement.textContent = 'Back';

                body.appendChild(h1Element);
                body.appendChild(backButtonElement);

                backButtonElement.addEventListener('click', onRefresh);

                function onRefresh() {
                    window.location.reload();
                }
            }
        }
    }
}




