
function swapimg(imagePath){
    const mainimg = document.getElementById("main-itzrealme-img")

    mainimg.style.opacity = "0"
    setTimeout(() => {
        mainimg.src = imagePath;
        mainimg.style.opacity = "1";
    }, 200);
}