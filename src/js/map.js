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
  const map1 = {
    setMap1: document.querySelectorAll('[map-button-chicago]'),
    closeMap1: document.querySelector('[close-map1]'),
    mapF: document.querySelector('[map-1]'),
  }
  
  map1.setMap1.forEach((btn) => {
    btn.addEventListener('click', setMapChicago)
  })
  map1.closeMap1.addEventListener('click', closeMapChicago)

  
  function setMapChicago() {
   map1.mapF.classList.remove('hide'),
      map1.mapF.classList.add('show')
  }
  function closeMapChicago() {
    map1.mapF.classList.remove('show'),
      map1.mapF.classList.add('hide')
  }
})()
  
;(() => {
 const map2 = {
    setMap2: document.querySelectorAll('[map-button-los-angeles]'),
    closeMap2: document.querySelector('[close-map2]'),
    mapS: document.querySelector('[map-2]'),
  }

  map2.setMap2.forEach((btn) => {
    btn.addEventListener('click', setMapLosAngeles)
  })
  map2.closeMap2.addEventListener('click', closeMapLosAngeles)


   function setMapLosAngeles() {
   map2.mapS.classList.remove('hide'),
      map2.mapS.classList.add('show')
  }
  function closeMapLosAngeles() {
    map2.mapS.classList.remove('show'),
      map2.mapS.classList.add('hide')
  }
})()


  
;(() => {
 const map3 = {
    setMap3: document.querySelectorAll('[map-button-new-york]'),
    closeMap3: document.querySelector('[close-map3]'),
    mapT: document.querySelector('[map-3]'),
  }

  map3.setMap3.forEach((btn) => {
    btn.addEventListener('click', setMapNewYork)
  })
  map3.closeMap3.addEventListener('click', closeMapNewYork)
 
   function setMapNewYork() {
   map3.mapT.classList.remove('hide'),
      map3.mapT.classList.add('show')
  }
  function closeMapNewYork() {
    map3.mapT.classList.remove('show'),
      map3.mapT.classList.add('hide')
  }
})()