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

        // Optional: Close the menu when a link is clicked (for smooth scrolling)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (mainNav.classList.contains('active')) {
                    mobileMenuButton.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            });
        });
    }
});

// Example of future JS functionality: Smooth scrolling for navigation links
/*
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href'); // Get the target section's ID
        const targetSection = document.querySelector(targetId); // Find the target element

        if (targetSection) {
            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
*/
