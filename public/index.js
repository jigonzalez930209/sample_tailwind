const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')
const root = document.querySelector('#root')


burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
})

function showNavBar() {
  menu.classList.add('hidden');
}