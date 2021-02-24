const header = document.querySelector("#header");
const intro = document.querySelector('#intro');
let introHeight = intro.clientHeight;

window.addEventListener('scroll', () => {
    if (pageYOffset > introHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
})


