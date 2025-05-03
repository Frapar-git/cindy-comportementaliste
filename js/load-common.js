document.addEventListener("DOMContentLoaded", function () {
    // Toggle FAQ answers
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
            const answerId = this.getAttribute("data-answer");
            const linkedAnswerId = this.getAttribute("data-linked-answer");

            // Hide all answers
            const allAnswers = document.querySelectorAll(".faq-answer");
            allAnswers.forEach(answer => answer.classList.add("hidden"));

            // Show the clicked answer
            if (answerId) {
                const answer = document.getElementById(answerId);
                answer.classList.remove("hidden");
            }

            // Show the linked answer (if any)
            if (linkedAnswerId) {
                const linkedAnswer = document.getElementById(linkedAnswerId);
                linkedAnswer.classList.remove("hidden");
            }
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
