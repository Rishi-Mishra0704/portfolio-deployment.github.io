/* -------------Getting Elements from html and css------------------- */
const menu = document.getElementById('mobile-menu')
const menubtn = document.getElementById('menu-bar')
const closebar = document.getElementsByClassName('close-btn')[0]
const main = document.querySelector('.bg')

/* -------------------------------Making Navbar----------------------------- */
menubtn.onclick = function display () {
  menu.style.display = 'block'
  main.style.filter = 'blur(8px)'
  menubtn.style.display = 'none'
  menu.style.position = 'fixed'
}

closebar.onclick = function close () {
  menu.style.display = 'none'
  menubtn.style.display = 'block'
}

window.onclick = function exit (event) {
  if (event.target === menu) {
    menu.style.display = 'none'
  }
}

menu.onclick = function close () {
  menu.style.display = 'none'
  main.style.filter = 'blur(0)'
  menubtn.style.display = 'block'
}
