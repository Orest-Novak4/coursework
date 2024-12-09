const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const createAdModal = document.getElementById('createAdModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const submitAdBtn = document.getElementById('submitAdBtn');
const adsContainer = document.getElementById('adsContainer');
const noAdsMessage = document.getElementById('noAdsMessage');

openModalBtn.addEventListener('click', () => {
    createAdModal.style.display = 'block';
    modalBackdrop.style.display = 'block';
});

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

function closeModal() {
    createAdModal.style.display = 'none';
    modalBackdrop.style.display = 'none';
}

submitAdBtn.addEventListener('click', () => {
    const adText = document.getElementById('adText').value;
    const adImage = document.getElementById('adImage').files[0];

    if (!adText || !adImage) {
        alert('Будь ласка, заповніть усі поля!');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const adCard = document.createElement('div');
        adCard.classList.add('ad-card');

        adCard.innerHTML = `
            <img src="${e.target.result}" alt="Зображення оголошення">
            <div class="ad-content">
                <h3>Нове оголошення</h3>
                <p>${adText}</p>
            </div>
        `;

        adsContainer.appendChild(adCard);
        noAdsMessage.style.display = 'none';
    };

    reader.readAsDataURL(adImage);

    closeModal();
    document.getElementById('adText').value = '';
    document.getElementById('adImage').value = '';
});
