function deleteByEmail() {
    let inputElement = document.getElementsByName('email')[0];
    let resultElement = document.getElementById('result');
    let allCustomersEmails = document.querySelectorAll('table tr td:nth-child(2)');
    let found = false;

    for (let td of allCustomersEmails) {
        if (td.textContent === inputElement.value) {
            td.parentNode.parentNode.removeChild(td.parentNode);
            resultElement.textContent = 'Deleted.';
            found = true;
            break;
        }
    }

    if (!found) {
        resultElement.textContent = 'Not found.';
    }

    inputElement.value = ""; // Clear the input field
}