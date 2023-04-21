let text = document.querySelector('.text')
let services = document.querySelector('.services')
let leaf = document.querySelector('.leaf')
let danyen = document.querySelector('.danyen')
let hill4 = document.querySelector('.hill4')
let hill5 = document.querySelector('.hill5')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 0.5 + 'px';
    danyen.style.left = value * 0.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
});
