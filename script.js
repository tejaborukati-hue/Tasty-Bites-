// Welcome message
console.log("Welcome to Tasty Bites!");

// Show message when Order form is submitted
const orderForm = document.querySelector(".order form");

if (orderForm) {
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("🎉 Your order has been placed successfully!");
        orderForm.reset();
    });
}

// Show message when Contact form is submitted
const contactForm = document.querySelector(".contact form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("✅ Thank you! Your message has been sent.");
        contactForm.reset();
    });
}

// Welcome popup when Home page opens
window.addEventListener("load", function() {
    if (document.querySelector(".hero")) {
        alert("🍴 Welcome to Tasty Bites Restaurant!");
    }
});