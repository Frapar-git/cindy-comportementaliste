document.addEventListener("DOMContentLoaded", function () {
    // Toggle FAQ categories
    const categoryButtons = document.querySelectorAll(".faq-category-button");
    const faqContainers = document.querySelectorAll(".faq-container");

    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove("active"));

            // Add 'active' class to the clicked button
            this.classList.add("active");

            // Get the selected category
            const selectedCategory = this.getAttribute("data-category");

            // Show the selected category and hide others
            faqContainers.forEach(container => {
                if (container.id === selectedCategory) {
                    container.classList.remove("hidden");
                } else {
                    container.classList.add("hidden");
                }
            });

            // Hide all answers when switching categories
            const allAnswers = document.querySelectorAll(".faq-answer");
            allAnswers.forEach(answer => answer.classList.add("hidden"));
        });
    });

    // Toggle FAQ answers
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
            const answerId = this.getAttribute("data-answer");
            const answer = document.getElementById(answerId);

            // Hide all other answers
            const allAnswers = document.querySelectorAll(".faq-answer");
            allAnswers.forEach(ans => ans.classList.add("hidden"));

            // Toggle the visibility of the clicked answer
            answer.classList.toggle("hidden");
        });
    });

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
