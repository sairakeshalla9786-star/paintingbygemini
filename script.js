// Waiting for the DOM to fully load before running JavaScript elements to ensure all selectors exist
document.addEventListener("DOMContentLoaded", () => {

    // --- Interactive Action 1: Product Button Clicks ---
    const productButtons = document.querySelectorAll(".buy-btn");

    productButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const artStyle = event.target.closest(".product-card").querySelector("h3").innerText;
            alert(`Redirecting you to our custom gallery featuring handpicked ${artStyle} selections.`);
        });
    });

    // --- Interactive Action 2: Newsletter CTA Form Submission Handling ---
    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const userEmail = emailInput.value;
            alert(`Namaste! Thank you for joining our community circles. Collection logs have been dispatched to: ${userEmail}`);
            newsletterForm.reset();
        });
    }

});