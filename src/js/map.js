;(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[modal-maps-open]'),
    closeModalBtn: document.querySelector('[modal-maps-close]'),
    modal: document.querySelector('[modal-maps]'),
  }

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener('click', toggleModal)
  })
  refs.closeModalBtn.addEventListener('click', toggleModal)
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      toggleModal()
    }
  })

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden')
  }
})()

;(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[modal-maps-open]'),
    closeModalBtn: document.querySelector('[modal-maps-close]'),
    modal: document.querySelector('[modal-maps]'),
  }

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener('click', toggleModal)
  })
  refs.closeModalBtn.addEventListener('click', toggleModal)
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      toggleModal()
    }
  })

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden')
  }
})()