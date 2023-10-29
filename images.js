document.addEventListener("DOMContentLoaded", function() {
    fetch('/images/', { method: 'GET' })
        .then(response => {
            // Note: This part assumes that your server lists the files in the directory.
            // You might need to configure or use server-side scripting to get file names.
            // Parse the response text as HTML and get all the href attributes for the images.
        })
        .then(imagePaths => {
            const gallery = document.getElementById('image-gallery');
            imagePaths.forEach(path => {
                // Assuming paths are relative to the 'images' directory.
                const img = document.createElement('img');
                img.src = `/images/${path}`;
                gallery.appendChild(img);
            });
        });
});
