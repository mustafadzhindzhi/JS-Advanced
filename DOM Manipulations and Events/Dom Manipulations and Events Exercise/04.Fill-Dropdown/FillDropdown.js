function addItem() {
    const textInputElement = $('#newItemText');
    const valueInputElement = $('#newItemValue');
    const menuElement = $('#menu');

    const textValue = textInputElement.val().trim();
    const value = valueInputElement.val().trim();

    if (textValue !== '' && value !== '') {
        const optionElement = $(`<option value="${value}">${textValue}</option>`);
        menuElement.append(optionElement);

        textInputElement.val('');
        valueInputElement.val('');
    } else {
        alert('Both "Text" and "Value" fields must be filled.');
    }
}