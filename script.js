const ham = document.querySelector('.ham');
const links = document.querySelector('.menu-links');

ham.addEventListener('click', () =>{
    links.classList.toggle('activate');
});

