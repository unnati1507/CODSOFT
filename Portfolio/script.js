// Optional:  You can add JavaScript for form submission handling, animations, etc.

// Example:  Basic form submission handling (you'd likely want server-side processing)
const contactForm = document.querySelector('#contact form');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    alert('Form submitted (Note: No actual server-side processing in this example)');

    // You could add code here to:
    // 1.  Gather form data (e.g., using `FormData`)
    // 2.  Send an AJAX request to a server-side endpoint
    // 3.  Display a success/error message to the user
    contactForm.reset(); // Clear the form
  });
}