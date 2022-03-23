const toggleBtn = document.querySelector('.burger__btn');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
    toggleBtn.classList.toggle('open');
    nav.classList.toggle('open');
    navList.classList.toggle('open');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
    setTimeout(() => {
        toggleBtn.classList.remove('open');
        nav.classList.remove('open');
        navList.classList.remove('open');
  }, 1000);
}
navItems.forEach(el => el.addEventListener('click', closeMenu));