// common.js
document.addEventListener("DOMContentLoaded", function() {
    // Function to load the header
    function loadHeader() {
        fetch('header.html')
            .then(response => {
                return response.text();
            })
            .then(html => {
                document.querySelector('body').insertAdjacentHTML('afterbegin', html);
            })
            .catch(err => {
                console.warn('Something went wrong.', err);
            });
    }

    // Calling the function
    loadHeader();
});
