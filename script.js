document.addEventListener("DOMContentLoaded", function () {

    // 1. Order Now buttons in menu page
    const orderButtons = document.querySelectorAll("button");

    orderButtons.forEach(button => {
        if (button.innerText === "Order Now") {
            button.addEventListener("click", function () {
                alert("Item added! Go to Order page 🛒");
                window.location.href = "order.html";
            });
        }
    });


    // 2. Order form submission
    const orderForm = document.querySelector(".order-form form");

    if (orderForm) {
        orderForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = orderForm.querySelector("input[type='text']").value;
            const phone = orderForm.querySelector("input[type='tel']").value;
            const food = orderForm.querySelector("select").value;
            const quantity = orderForm.querySelector("input[type='number']").value;

            if (name && phone && food && quantity) {
                alert(`🎉 Order placed successfully!\n\nName: ${name}\nFood: ${food}\nQuantity: ${quantity}`);

                orderForm.reset();
            } else {
                alert("Please fill all fields!");
            }
        });
    }

});
