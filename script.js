// Welcome message
window.onload = function () {
    console.log("Welcome to Foodie Restaurant!");
};

// Order function
function placeOrder(item) {
    alert("✅ Thank you! Your order for " + item + " has been placed successfully.");
}

// Contact form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("📩 Thank you for contacting us! We will get back to you soon.");

        form.reset();
    });
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
