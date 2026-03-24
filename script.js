document.addEventListener('DOMContentLoaded', () => {
    // Quantity Selector Logic
    const qtyInput = document.getElementById('qtyInput');
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');

    if (qtyInput && minusBtn && plusBtn) {
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
    }

    // Cart Logic & Persistance
    const addToCartBtn = document.getElementById('addToCartBtn');
    const cartCountEl = document.querySelector('.cart-count');
    const toast = document.getElementById('toast');
    
    let cart = JSON.parse(localStorage.getItem('auraCart')) || [];

    function updateCartCount() {
        if (cartCountEl) {
            const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountEl.textContent = totalQty;
        }
    }

    // Initial load
    updateCartCount();

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const qty = parseInt(qtyInput.value);
            
            // Product info
            const product = {
                id: 'aura-signature',
                name: 'Aura Signature Cold Brew',
                price: 5.99,
                image: 'assets/bottle.png'
            };

            const existingItemIndex = cart.findIndex(item => item.id === product.id);
            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += qty;
            } else {
                cart.push({ ...product, quantity: qty });
            }

            localStorage.setItem('auraCart', JSON.stringify(cart));
            
            // Update UI
            updateCartCount();
            cartCountEl.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartCountEl.style.transform = 'scale(1)';
            }, 200);

            // Show toast
            if (toast) {
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }
            
            // Reset quantity
            qtyInput.value = 1;
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '1rem 5%';
                navbar.style.background = 'rgba(13, 12, 15, 0.95)';
            } else {
                navbar.style.padding = '1.5rem 5%';
                navbar.style.background = 'rgba(13, 12, 15, 0.8)';
            }
        });
    }
});
