let toogleBtn = document.getElementById('toggle-btn')
let navBar = document.querySelector('.main-navbar')


let showMenu = () => {
    navBar.classList.toggle('active')
}
toogleBtn.addEventListener('click', showMenu)
