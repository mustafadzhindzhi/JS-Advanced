function lockedProfile() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', toggleProfile);
    });

    function toggleProfile(e) {
        const profile = e.currentTarget.parentElement;
        const unlockElement = profile.querySelector('input[value="unlock"]');
        const hiddenElement = profile.querySelector('.profile div');

        if (unlockElement.checked) {
            if (e.currentTarget.textContent === 'Show more') {
                e.currentTarget.textContent = 'Hide it';
                hiddenElement.style.display = 'block';
            } else if (e.currentTarget.textContent === 'Hide it') {
                e.currentTarget.textContent = 'Show more';
                hiddenElement.style.display = 'none';
            }
        }
    }
}