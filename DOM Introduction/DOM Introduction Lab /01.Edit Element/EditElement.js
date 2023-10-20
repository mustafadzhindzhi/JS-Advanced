function editElement(reference, match, replacer) {
    const pattern = new RegExp(match, 'g');

    reference.textContent = reference.textContent.replace(pattern, replacer);
}