document.addEventListener("DOMContentLoaded", function () {
    // Load the header
    fetch('../html/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Set the page title
            const pageTitle = document.title;
            document.getElementById('page-title').textContent = pageTitle;

            // Highlight the active link in the header
            const currentPage = window.location.pathname; // Get the current page path
            const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links

            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active'); // Add the 'active' class to the matching link
                }
            });
        });

    // Load the footer
    fetch('../html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
