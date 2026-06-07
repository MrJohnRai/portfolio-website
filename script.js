const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

console.log(menuIcon);
console.log(navbar);

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};