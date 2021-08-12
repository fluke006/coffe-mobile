const elHamburger = document.querySelector('.header__hamburgerbtn');
const elHeader = document.querySelector('.header');

elHamburger.addEventListener('click' , (etv)=> {
   elHeader.classList.toggle('header--open')
})