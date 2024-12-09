document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cancelButton = document.getElementById('cancel-button');
    const orderButton = document.getElementById('order-button');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        cartItems.innerHTML = cart.length
            ? cart.map(item => `<li>${item.title} - ${item.price}</li>`).join('')
            : '<li>Кошик порожній</li>';
    }

    cancelButton.addEventListener('click', () => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        alert('Кошик очищено');
    });

    orderButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Дякуємо за замовлення!');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        } else {
            alert('Кошик порожній');
        }
    });

    updateCart();
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const adCard = button.closest('.ad-card');
        const title = adCard.getAttribute('data-title');
        const price = adCard.getAttribute('data-price');

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ title, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Додано "${title}" до кошика`);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>Кошик порожній</li>';
    } else {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.title} - ${item.price}`;
            cartItemsList.appendChild(li);
        });
    }

    document.getElementById('cancel-button').addEventListener('click', () => {
        localStorage.removeItem('cart');
        alert('Кошик очищено.');
        location.reload();
    });

    document.getElementById('order-button').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Ваше замовлення прийнято!');
            localStorage.removeItem('cart');
            location.reload();
        } else {
            alert('Кошик порожній. Додайте товари перед замовленням.');
        }
    });
});
