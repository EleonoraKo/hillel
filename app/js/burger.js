
(function () {
    const burger = document.querySelector('.header-btn')
    if(!burger) return
    const menu = document.querySelector('.header__menu')
    const overlay = document.querySelector('.header__overlay')
    const body = document.querySelector('body')
  
  
  
    burger.addEventListener('click', function() {
      menu.classList.toggle('show')
      burger.classList.toggle('show')
      overlay.classList.toggle('show')
      body.classList.toggle('stop-scroll')
    })
  
  
    overlay.addEventListener('click', function () {
      menu.classList.remove('show')
      burger.classList.remove('show')
      overlay.classList.remove('show')
      body.classList.remove('stop-scroll')
    })
  })()
  
  
  const tabsBtns = document.querySelectorAll('.tabs__btn')
  const tabsContents = document.querySelectorAll('.tabs__text')
  
  
  tabsBtns.forEach(function (button, index) {
    button.addEventListener('click', function () {
      tabsBtns.forEach(function (buttonColor) {
        buttonColor.classList.remove('show')
      })
      tabsContents.forEach(function(text) {
        text.classList.remove('show')
      })
      button.classList.add('show')
      tabsContents[index].classList.add('show')
    })
  })
  
  
  
  
  const links = document.querySelectorAll('.custom-link')
  
  links.forEach(function(link) {
    link.addEventListener('click', function (event) {
      event.preventDefault()
  
      const pointBlock = document.querySelector(link.dataset.href)
  
      window.scrollTo({
        top: pointBlock.offsetTop,
        behavior: 'smooth'
      })
  
    })
  })
  
  
  
  
  
  
  