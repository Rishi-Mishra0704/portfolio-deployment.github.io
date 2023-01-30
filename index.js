const menu = document.getElementById('mobile-menu')
const menubtn = document.getElementById('menu-bar')
const closebar = document.getElementsByClassName('close-btn')[0]
const main = document.querySelector('.bg')
menubtn.onclick = function display () {
  menu.style.display = 'block'
  main.style.filter = 'blur(8px)'
  menubtn.style.display = 'none'
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
}
