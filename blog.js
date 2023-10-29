document.addEventListener("DOMContentLoaded", function() {
    fetch('/articles/', { method: 'GET' })
        .then(response => {
            // Similar note: this assumes your server lists the files.
            // You may need server-side code to get these JSON filenames.
        })
        .then(articleFilenames => {
            articleFilenames.forEach(filename => {
                fetch(`/articles/${filename}`)
                    .then(response => response.json())
                    .then(article => {
                        const container = document.getElementById('blog-articles');
                        const articleElem = document.createElement('div');
                        articleElem.innerHTML = `
                    <h2>${article.title}</h2>
                    <img src="${article.image}" alt="${article.title}">
                    <p>${article.content}</p>
                `;
                        container.appendChild(articleElem);
                    });
            });
        });
});
