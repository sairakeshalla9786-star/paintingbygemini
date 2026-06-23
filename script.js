// Waiting for the DOM to fully load before running JavaScript elements to ensure all selectors exist
document.addEventListener("DOMContentLoaded", () => {

    // --- Interactive Action 1: Product Button Clicks ---
    // Select all 'View Artworks' target buttons across the product grid component
    const productButtons = document.querySelectorAll(".buy-btn");

    productButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            // Finding the parent art style title using DOM navigation relative to the button pressed
            const artStyle = event.target.closest(".product-card").querySelector("h3").innerText;
            
            // Simulating user choice verification via window notice alerts
            alert(`Redirecting you to our custom gallery featuring handpicked ${artStyle} selections.`);
        });
    });

    // --- Interactive Action 2: Newsletter CTA Form Submission Handling ---
    // Grabbing the email signup section elements
    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            // Preventing standard browser form refreshes to handle confirmation seamlessly via JS
            e.preventDefault();

            const userEmail = emailInput.value;

            // Log entry simulation or validation handling hook setup
            alert(`Namaste! Thank you for joining our community circles. Collection logs have been dispatched to: ${userEmail}`);
            
            // Reset input values once logic captures tracking records safely
            newsletterForm.reset();
        });
    }
});