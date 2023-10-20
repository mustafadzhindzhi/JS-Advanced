function focused() {
    const inputElements = document.querySelectorAll('input');

    inputElements.forEach(input => {
        input.addEventListener('focus', (e) => {
            e.currentTarget.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', (e) => {
            e.currentTarget.parentElement.classList.remove('focused');
        });
    });
}