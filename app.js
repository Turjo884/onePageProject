// const hamburger = document.querySelector('.header-container .nav-bar .nav-list .hamburger');
// const mobile_menu = document.querySelector('.header-container .nav-bar .nav-list ul');
// const header = document.querySelector('.header-container');


// hamburger.addEventListeaner('click', () => {
//     hamburger.classList.toggle('active');
//     mobile_menu.classList.toggle('active');
// });

// Working Js code 

const click = document.getElementById('clickTest');
const hamShow = document.getElementById('ulShow');

click.addEventListener('click',function(){
    hamShow.classList.toggle('active');
})