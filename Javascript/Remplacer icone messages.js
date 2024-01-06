// CODE BY NYXEIA

document.addEventListener('DOMContentLoaded', () => {

var noNewCatTemp = "https://2img.net/images2.imgbox.com/40/ae/zxM5aOdz_o.png";
var newCatTemp = "https://2img.net/images2.imgbox.com/1f/30/lUgHcoWf_o.gif";
var newMsgTemp = "https://2img.net/images2.imgbox.com/5f/47/Vh0alSt9_o.gif";

var currentCatImgList = document.getElementsByClassName("forum-img");
var currentMsgImgList = document.getElementsByClassName("topicslist-img");

// Add class to category img 
for (currentImg of currentCatImgList) {
    console.log(currentImg);
    switch (currentImg.getAttribute("src"))
    {
        case newCatTemp:
            currentImg.classList.add("cat-img-new");
            break;
        case noNewCatTemp: 
        default:
            currentImg.classList.add("cat-img-nonew");
            break;
    }
}

// Same for new message in topic
for (currentDiv of currentMsgImgList) {
    var currentImg = currentDiv.firstChild;

    switch (currentImg.getAttribute("src"))
    {
        case newMsgTemp: 
            currentImg.classList.add("msg-img-new");
            break;
        default:
            break;
    }
}
});