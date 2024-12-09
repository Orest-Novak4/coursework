document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.dataset.title;
            const price = button.dataset.price;

            localStorage.setItem('selectedProduct', JSON.stringify({ title, price }));

            window.location.href = 'cart.html';
        });
    });
});
