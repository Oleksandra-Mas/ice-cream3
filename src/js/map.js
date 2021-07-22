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

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden')
  }

})()

;(() => {
  const map1 = {
    setMap1: document.querySelectorAll('[map-button-chicago]'),
    closeMap11: document.querySelector('[close-map11]'),
    closeMap12: document.querySelector('[close-map12]'),
    mapF: document.querySelector('[map-1]'),
  }
  map1.setMap1.forEach((btn) => {
    btn.addEventListener('click', setMapChicago)
  })
  
  map1.closeMap11.addEventListener('click', closeMapChicago1)
  map1.closeMap12.addEventListener('click', closeMapChicago2)
  
  function setMapChicago() {
    if (map1.mapF.classList.contains('hide'))
    {      map1.mapF.classList.remove('hide');    }
    if(!map1.mapF.classList.contains('show'))
    {       map1.mapF.classList.add('show');     }
  }
  function closeMapChicago1() {
    if(map1.mapF.classList.contains('show'))
    {      map1.mapF.classList.remove('show');    }
    if (map1.mapF.classList.contains('hide'))
    {      map1.mapF.classList.add('hide');    }
  }
  function closeMapChicago2() {
    if(map1.mapF.classList.contains('show'))
    {      map1.mapF.classList.remove('show');    }
    if (map1.mapF.classList.contains('hide'))
    {      map1.mapF.classList.add('hide');    }
  }
})()
  


;(() => {
  const map2 = {
    setMap2: document.querySelectorAll('[map-button-los-angeles]'),
    closeMap21: document.querySelector('[close-map21]'),
    closeMap22: document.querySelector('[close-map22]'),
    mapS: document.querySelector('[map-2]'),
  }
  map2.setMap2.forEach((btn) => {
    btn.addEventListener('click', setLosAngeles)
  })
  
  map2.closeMap21.addEventListener('click', closeLosAngeles1)
  map2.closeMap22.addEventListener('click', closeLosAngeles2)
  
  function setLosAngeles() {
    if (map2.mapS.classList.contains('hide'))
    {      map2.mapS.classList.remove('hide');    }
    if(!map2.mapS.classList.contains('show'))
    {      map2.mapS.classList.add('show');    }
  }
  function closeLosAngeles1() {
    if(map2.mapS.classList.contains('show'))
    {      map2.mapS.classList.remove('show');    }
    if (map2.mapS.classList.contains('hide'))
    {      map2.mapS.classList.add('hide');    }
  }
  function closeLosAngeles2() {
    if(map2.mapS.classList.contains('show'))
    {      map2.mapS.classList.remove('show');    }
    if (map2.mapS.classList.contains('hide'))
    {      map2.mapS.classList.add('hide');    }
  }
})()

;(() => {
  const map3 = {
    setMap3: document.querySelectorAll('[map-button-new-york]'),
    closeMap31: document.querySelector('[close-map31]'),
    closeMap32: document.querySelector('[close-map32]'),
    mapT: document.querySelector('[map-3]'),
  }
  map3.setMap3.forEach((btn) => {
    btn.addEventListener('click', setNewYork)
  })
  
  map3.closeMap31.addEventListener('click', closeNewYork1)
  map3.closeMap32.addEventListener('click', closeNewYork2)
  
  function setNewYork() {
    if (map3.mapT.classList.contains('hide'))
    {      map3.mapT.classList.remove('hide');    }
    if(!map3.mapT.classList.contains('show'))
    {      map3.mapT.classList.add('show');    }
  }
  function closeNewYork1() {
    if(map3.mapT.classList.contains('show'))
    {      map3.mapT.classList.remove('show');    }
    if (map3.mapT.classList.contains('hide'))
    {      map3.mapT.classList.add('hide');    }
  }
  function closeNewYork2() {
    if(map3.mapT.classList.contains('show'))
    {      map3.mapT.classList.remove('show');    }
    if (map3.mapT.classList.contains('hide'))
    {      map3.mapT.classList.add('hide');    }
  }
})()


// ;(() => {
//  const map2 = {
//     setMap2: document.querySelectorAll('[map-button-los-angeles]'),
//     closeMap2: document.querySelector('[close-map2]'),
//     mapS: document.querySelector('[map-2]'),
//   }

//   map2.setMap2.forEach((btn) => {
//     btn.addEventListener('click', setMapLosAngeles)
//   })
//   map2.closeMap2.addEventListener('click', closeMapLosAngeles)


//    function setMapLosAngeles() {
//    map2.mapS.classList.remove('hide'),
//       map2.mapS.classList.add('show')
//   }
//   function closeMapLosAngeles() {
//     map2.mapS.classList.remove('show'),
//       map2.mapS.classList.add('hide')
//   }
// })()


  
// ;(() => {
//  const map3 = {
//     setMap3: document.querySelectorAll('[map-button-new-york]'),
//     closeMap3: document.querySelector('[close-map3]'),
//     mapT: document.querySelector('[map-3]'),
//   }

//   map3.setMap3.forEach((btn) => {
//     btn.addEventListener('click', setMapNewYork)
//   })
//   map3.closeMap3.addEventListener('click', closeMapNewYork)
 
//    function setMapNewYork() {
//    map3.mapT.classList.remove('hide'),
//       map3.mapT.classList.add('show')
//   }
//   function closeMapNewYork() {
//     map3.mapT.classList.remove('show'),
//       map3.mapT.classList.add('hide')
//   }
// })()