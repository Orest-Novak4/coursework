const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const createAdModal = document.getElementById('createAdModal');
const modalBackdrop = document.getElementById('modalBackdrop');

openModalBtn.addEventListener('click', () => {
    createAdModal.style.display = 'block';
    modalBackdrop.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    createAdModal.style.display = 'none';
    modalBackdrop.style.display = 'none';
});

modalBackdrop.addEventListener('click', () => {
    createAdModal.style.display = 'none';
    modalBackdrop.style.display = 'none';
});

document.getElementById('submitAdBtn').addEventListener('click', () => {
    const adText = document.getElementById('adText').value;
    const adImage = document.getElementById('adImage').files[0];

    if (!adText || !adImage) {
        alert('Будь ласка, заповніть усі поля!');
        return;
    }

    alert('Оголошення успішно додано!');
    createAdModal.style.display = 'none';
    modalBackdrop.style.display = 'none';
});
