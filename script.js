document.addEventListener('DOMContentLoaded', () => {
    // Quantity Selector Logic
    const qtyInput = document.getElementById('qtyInput');
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');

    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value);
        if (currentValue < 20) {
            qtyInput.value = currentValue + 1;
        }
    });

    // Add to Cart Logic
    const addToCartBtn = document.getElementById('addToCartBtn');
    const cartCountEl = document.querySelector('.cart-count');
    const toast = document.getElementById('toast');
    let cartTotal = 0;

    addToCartBtn.addEventListener('click', () => {
        const qty = parseInt(qtyInput.value);
        cartTotal += qty;
        
        // Update cart count with small animation
        cartCountEl.textContent = cartTotal;
        cartCountEl.style.transform = 'scale(1.5)';
        setTimeout(() => {
            cartCountEl.style.transform = 'scale(1)';
        }, 200);

        // Show toast
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
        
        // Reset quantity
        qtyInput.value = 1;
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 5%';
            navbar.style.background = 'rgba(13, 12, 15, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 5%';
            navbar.style.background = 'rgba(13, 12, 15, 0.8)';
        }
    });
});
