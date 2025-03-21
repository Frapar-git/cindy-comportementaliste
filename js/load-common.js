document.addEventListener("DOMContentLoaded", function() {
    // Load the header
    fetch('../html/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Set the page title
            const pageTitle = document.title;
            document.getElementById('page-title').textContent = pageTitle;
        });

    // Load the footer
    fetch('../html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
