function validate() {
    const emailInputElement = document.getElementById('email');

    emailInputElement.addEventListener('change', (e) => {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (!pattern.test(e.currentTarget.value)) {
            e.currentTarget.classList.add('error');
        } else {
            e.currentTarget.classList.remove('error');
        }
    });
}