function solve() {
    const textareaElements = document.querySelectorAll('textarea');
    const buttonElements = document.querySelectorAll('button');
    const tbodyElement = document.querySelector('tbody');

    const [generateTextarea, resultTextArea] = Array.from(textareaElements);
    const [generateButton, buyButton] = Array.from(buttonElements);

    generateButton.addEventListener('click', onGenerate);
    buyButton.addEventListener('click', onBuy);

    function onGenerate() {
        const items = JSON.parse(generateTextarea.value);

        items.forEach(element => {
            const tr = document.createElement('tr');
            const tdImg = document.createElement('td');
            const imgElement = document.createElement('img');
            const tdName = document.createElement('td');
            const tdPrice = document.createElement('td');
            const tdDecFacotr = document.createElement('td');
            const tdCheckbox = document.createElement('td');
            const inputCheckbox = document.createElement('input');

            const pName = document.createElement('p');
            const pPrice = document.createElement('p');
            const pDecFactor = document.createElement('p');

            imgElement.src = element.img;
            inputCheckbox.type = 'checkbox';

            pName.textContent = element.name;
            pPrice.textContent = element.price;
            pDecFactor.textContent = element.decFactor;

            tdImg.appendChild(imgElement);
            tdName.appendChild(pName);
            tdPrice.appendChild(pPrice);
            tdDecFacotr.appendChild(pDecFactor);
            tdCheckbox.appendChild(inputCheckbox);

            tr.appendChild(tdImg);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdDecFacotr);
            tr.appendChild(tdCheckbox);

            tbodyElement.appendChild(tr);
        });
    }

    function onBuy() {
        const checkboxElements = document.querySelectorAll('input[type="checkbox"]');
        const checkboxes = Array.from(checkboxElements);
        
        const checkedItems = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        let avgDecFactor = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const productInfoElement = checkbox.parentNode.parentNode.querySelectorAll('p');
                const productInfo = Array.from(productInfoElement);

                const productName = productInfo[0].textContent;
                const productPrice = Number(productInfo[1].textContent);
                const productDecFactor = Number(productInfo[2].textContent);

                checkedItems.push(productName);
                totalPrice += productPrice;
                totalDecFactor += productDecFactor;
                avgDecFactor = totalDecFactor / checkedItems.length;

                resultTextArea.value = `Bought furniture: ${checkedItems.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;
            }
        });
    }
}