document.getElementById('recommendations-btn').addEventListener('click', () => {
    const recommendationsSection = document.getElementById('recommendations-section');
    recommendationsSection.classList.toggle('hidden');
});

document.querySelectorAll('.ad-card img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.2)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

document.getElementById('search-button').addEventListener('click', () => {
    const searchText = document.getElementById('search-bar').value.toLowerCase();
    const ads = document.querySelectorAll('.ad-card');
    let found = false;

    ads.forEach((ad) => {
        const title = ad.getAttribute('data-title').toLowerCase();
        if (title.includes(searchText)) {
            ad.style.display = 'block';
            found = true;
        } else {
            ad.style.display = 'none';
        }
    });

    if (!found) {
        alert('За вашим запитом нічого не знайдено.');
    }
});

document.getElementById('search-bar').addEventListener('input', () => {
    const searchText = document.getElementById('search-bar').value;
    if (searchText === '') {
        document.querySelectorAll('.ad-card').forEach((ad) => {
            ad.style.display = 'block';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const adCards = document.querySelectorAll('.ad-card');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupPrice = document.getElementById('popup-price');
    const closePopup = document.getElementById('close-popup');

    adCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            const price = card.querySelector('p').textContent;

            popupTitle.textContent = title;
            popupPrice.textContent = price;
            popup.classList.remove('hidden');
        });
    });

    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
});
