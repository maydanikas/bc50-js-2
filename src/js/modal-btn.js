const elements = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backDrop: document.querySelector('[data-backdrop]'),
};

elements.openModalBtn.addEventListener('click', openModal);
elements.closeModalBtn.addEventListener('click', () => {
  deleteListenerModal();
});

function openModal() {
  elements.modal.classList.toggle('is-hidden');

  listenerModal();
}

function closeModal(event) {
  if (event.code === 'Escape') {
    deleteListenerModal();
  }

  if (event.target === elements.backDrop) {
    deleteListenerModal();
  }
}

function listenerModal() {
  document.addEventListener('keydown', closeModal);
  elements.backDrop.addEventListener('click', closeModal);
}

function deleteListenerModal() {
  elements.modal.classList.add('is-hidden');

  document.removeEventListener('keydown', closeModal);
  elements.backDrop.removeEventListener('click', closeModal);
}
