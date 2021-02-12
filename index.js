window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image1 = document.getElementById("reload-1");
    image1.style.transform = "rotatez(" + (window.pageYOffset - 500) / 14 + "deg)translateX(" + (-window.pageYOffset - 100) / 4 + "px)";

    let image2 = document.getElementById("reload-2");
    image2.style.transform = "translateX(" + (window.pageYOffset - 100) / 3 + "px)";

    let image3 = document.getElementById("reload-3");
    image3.style.transform = "translateY(" + (window.pageYOffset - 1600) / 4  + "px)";

    let image4 = document.getElementById("reload-4");
    image4.style.transform ="scale(" + (window.pageYOffset - 100) / 1300 + ")";

}
