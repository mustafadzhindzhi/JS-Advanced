function getArticleGenerator(input) {
    const articles = input;

    return () => {
        const divElement = document.getElementById('content');
        const articleElement = document.createElement('article');

        if (articles.length) {
            articleElement.innerText = articles.shift();
            divElement.appendChild(articleElement);
        }
    };
}
