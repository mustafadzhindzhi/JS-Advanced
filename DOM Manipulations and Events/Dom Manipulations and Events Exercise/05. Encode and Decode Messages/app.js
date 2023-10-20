function encodeAndDecodeMessages() {
    const buttonElements = document.querySelectorAll('button');
    const textareaElements = document.querySelectorAll('textarea');

    const [encodeButton, decodeButton] = Array.from(buttonElements);
    const [encodeTextarea, decodeTextarea] = Array.from(textareaElements);

    encodeButton.addEventListener('click', onEncode);
    decodeButton.addEventListener('click', onDecode);

    function onEncode() {
        const currentMessage = encodeTextarea.value;
        let encodedMessage = '';

        for (let char of currentMessage) {
            char = String.fromCharCode(char.charCodeAt() + 1);
            encodedMessage += char;
        }

        encodeTextarea.value = '';
        decodeTextarea.value = encodedMessage;
    }

    function onDecode(e) {
        const currentMessage = decodeTextarea.value;
        let decodedMessage = '';


        for (let char of currentMessage) {
            char = String.fromCharCode(char.charCodeAt() - 1);
            decodedMessage += char;
        }

        decodeTextarea.value = decodedMessage;
    }
}