window.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning 🌅";
    } else if (hour < 18) {
        greeting = "Good afternoon ☀️";
    } else {
        greeting = "Good evening 🌙";
    }

    const greetingMessage = document.getElementById('greeting-message');
    if (greetingMessage) {
        const fullText = `${greeting}! Welcome to Tolu Solution Store 🛍️`;
        let index = 0;

        function typeText() {
            if (index <= fullText.length) {
                greetingMessage.textContent = fullText.slice(0, index);
                index++;
                setTimeout(typeText, 60);
            }
        }
        typeText();
    }
});

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsList = document.getElementById('cart-items');
const totalPriceDisplay = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

let cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));
        cart.push({ name, price });
        renderCart();
    });
});

function renderCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₦${item.price.toLocaleString()}`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', () => {
            cart.splice(index, 1);
            renderCart();
        });

        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);
        total += item.price;
    });

    totalPriceDisplay.textContent = `Total: ₦${total.toLocaleString()}`;
}

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is currently empty.");
    } else {
        alert("Thank you for shopping with Tolu Solution Store! Your order is being processed.");
        cart = [];
        renderCart();
    }
});

document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-img');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
});
