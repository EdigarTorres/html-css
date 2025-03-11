const card = document.getElementById('card');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');

card.addEventListener('click', () => {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});
