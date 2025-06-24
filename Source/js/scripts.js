// This is a placeholder for any future JavaScript enhancements.
// For now, it simply logs a message to the console when the script loads.
console.log("Welcome to Cássio's portfolio!");

// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle the 'active' class on the button itself for animation
            this.classList.toggle('active');
            // Toggle the 'active' class on the navigation to show/hide it
            mainNav.classList.toggle('active');
        });

        // Close the menu when a link is clicked (for smooth scrolling)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (mainNav.classList.contains('active')) {
                    mobileMenuButton.classList.remove('active');
                    mainNav.classList.remove('active');
                }
                // Call smooth scroll function
                smoothScroll(this.getAttribute('href'));
            });
        });
    }

    // Smooth scrolling for navigation links
    function smoothScroll(targetId) {
        // Prevent default jump behavior if it's an internal link
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId); // Find the target element

            if (targetSection) {
                // Scroll smoothly to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        // If it's an external link, allow default behavior (or handle differently if needed)
    }

    // Attach smooth scroll to all nav links initially
    document.querySelectorAll('nav a').forEach(anchor => {
        // Only attach if it's an internal link (starts with #)
        if (anchor.getAttribute('href').startsWith('#')) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default jump behavior
                smoothScroll(this.getAttribute('href'));
            });
        }
    });

});
