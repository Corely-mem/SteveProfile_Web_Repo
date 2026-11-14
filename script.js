// HEADER

const nav = document.getElementById('responsive-nav')
const navlinks = document.querySelector('.nav-links')

nav.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navlinks.classList.remove('active')
    })
})


// MAIN
function swapimg(imagePath){
    const mainimg = document.getElementById("main-itzrealme-img")

    mainimg.style.opacity = "0"
    setTimeout(() => {
        mainimg.src = imagePath;
        mainimg.style.opacity = "1";
    }, 200);
}