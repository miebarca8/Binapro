const menu = document.querySelector('#menuBtn')
const sideBar = document.querySelector('#sideBar')
const closeBtn = document.querySelector('#closeBtn') 
console.log('closeBtn')

menu.addEventListener('click', function() {
  sideBar.classList.toggle('hidden')
})

closeBtn.addEventListener('click', function() { 
  console.log('close clicked!')
  console.log(sideBar.classList)
  sideBar.classList.toggle('hidden')
})

const installingCard = document.querySelector('#installing')
const modal = document.querySelector('#modal')
const modalClose = document.querySelector('#modalClose')

if (installingCard) {
  installingCard.addEventListener('click', function() {
    modal.classList.toggle('hidden')
  })

  modalClose.addEventListener('click', function() {
    modal.classList.toggle('hidden')
  })
}



const currentPage = window.location.pathname.split('/').pop() || 'index.html'

const navItems = document.querySelectorAll('#navLinks a, .sidebar a')

navItems.forEach(function(link) {
  const linkPage = link.getAttribute('href')
  if (linkPage === currentPage) {
    link.classList.add('active')
  }
})

const faqButtons = document.querySelectorAll('.faq-question')

faqButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const answer = button.nextElementSibling
    answer.classList.toggle('hidden')
  })
})

const carousel = document.querySelector('#carousel')
const nextBtn = document.querySelector('#nextBtn')
const prevBtn = document.querySelector('#prevBtn')

if (carousel) {
  nextBtn.addEventListener('click', function() {
    carousel.scrollBy({
      left: 270,
      behavior: 'smooth'
    })
  })

  prevBtn.addEventListener('click', function() {
    carousel.scrollBy({
      left: -270,
      behavior: 'smooth'
    })
  })
}

nextBtn.addEventListener('click', function() {
  const cardwidth = carousel.querySelector('.card').offsetWidth
  carousel.scrollBy({
    left: cardwidth + 15,
    behavior: 'smooth'
  })
})

prevBtn.addEventListener('click', function() {
  const cardwidth = carousel.querySelector('.card').offsetWidth
  carousel.scrollBy({
    left: -(cardwidth + 15),
    behavior: 'smooth'
  })
})