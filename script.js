function orderNow() {
    alert('Thank you for your order!');
}


new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart from localStorage or empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart counter
    const cartCount = document.querySelector('.cart span');
    function updateCartCount() {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Add to cart logic
    function addToCart(name, price, quantity = 1) {
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += quantity; // Increment quantity if item exists
        } else {
            cart.push({ name, price: parseFloat(price), quantity }); // Add new item
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        updateCartCount();
    }

    // Handle "Add to Cart" button clicks
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.menu-item');
            const name = item.getAttribute('data-name');
            const price = item.getAttribute('data-price');

            if (name && price) {
                addToCart(name, price);
            } else {
                alert('Error: Missing item details.');
            }
        });
    });

    // Initial update of cart count
    updateCartCount();
});


    function toggleSearchBar() {
        const searchBar = document.getElementById('searchBar');
        searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
    }

    function handleSearch(event) {
        if (event.key === 'Enter') {
            window.location.href = 'shop.html';
        }
    }
