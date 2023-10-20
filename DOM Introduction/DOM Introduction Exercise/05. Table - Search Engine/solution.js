function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchInput = document.getElementById('searchField').value.toLowerCase();
        const trElements = document.querySelectorAll('tbody tr');

        trElements.forEach(user => {
            const userText = user.textContent.toLowerCase();
            const isMatch = userText.includes(searchInput);
            user.classList.toggle('select', isMatch);
        });

        document.getElementById('searchField').value = '';
    }
}