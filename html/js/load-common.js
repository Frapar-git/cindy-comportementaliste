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

            // Check if the clicked answer is already visible
            if (!answer.classList.contains("hidden")) {
                // If visible, hide it
                answer.classList.add("hidden");
            } else {
                // If not visible, hide all other answers and show the clicked one
                const allAnswers = document.querySelectorAll(".faq-answer");
                allAnswers.forEach(ans => ans.classList.add("hidden"));

                answer.classList.remove("hidden");
            }
        });
    });

    // Toggle Product Details - Improved version
    const detailsButtons = document.querySelectorAll(".details-button");
    
    detailsButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Get the details container ID
            const detailsId = this.getAttribute("data-details");
            const detailsContainer = document.getElementById(detailsId);
            
            if (!detailsContainer) {
                console.error(`Details container with id ${detailsId} not found`);
                return;
            }

            // If the clicked container is already visible, hide it
            if (!detailsContainer.classList.contains("hidden")) {
                detailsContainer.classList.add("hidden");
                return;
            }

            // Hide all details containers
            document.querySelectorAll(".details-container").forEach(container => {
                container.classList.add("hidden");
            });
            
            // Show the clicked container
            detailsContainer.classList.remove("hidden");

            // Scroll the details container into view
            detailsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    });

    // Load the header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Set the page title
            const pageTitle = document.title;
            document.getElementById('page-title').textContent = "Cindy - Comportementaliste félin";

            // Highlight the active link in the header
            const currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
            const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links

            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active'); // Add the 'active' class to the matching link
                }
            });

            // Initialize hamburger menu functionality
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            const menuLinks = document.querySelectorAll('.nav-link');

            // Toggle menu
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking a link
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });

    // Load the footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;

            // Highlight the active link in the footer
            const currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
            const footerLinks = document.querySelectorAll('.footer-link'); // Select all footer links

            footerLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active'); // Add the 'active' class to the matching link
                }
            });
        });
}); 
