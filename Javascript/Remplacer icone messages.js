// CODE BY NYXEIA

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

// Placeholder URLs for categories
var noNewCatTemp = "https://2img.net/images2.imgbox.com/40/ae/zxM5aOdz_o.png";
var newCatTemp = "https://2img.net/images2.imgbox.com/40/ae/zxM5aOdz_o.png";
var lockedCatTemp = "https://2img.net/images2.imgbox.com/40/ae/zxM5aOdz_o.png";

// Placeholder URLs for topics
var newMsgTemp = "	https://2img.net/images2.imgbox.com/5f/47/Vh0alSt9_o.gif";

var currentCatImgList = document.getElementsByClassName(".forum-img").getAttribute("src");
var currentMsgImgList = document.getElementsByClassName(".topicslist-img");

if (currentTheme) {
    // Add theme and class to category img 
    for (currentImg in currentCatImgList) {
        currentImg.setAttribute('data-theme', currentTheme);

        switch (currentImg)
        {
            case newCatTemp:
                currentImg.classList.add("cat-img-new");
                break;
            case lockedCatTemp:
                currentImg.classList.add("cat-img-locked");
                break;
            case noNewCatTemp: 
            default:
                currentImg.classList.add("cat-img-nonew");
                break;
        }
    }

    // Same for new message in topic
    for (currentDiv in currentMsgImgList) {
        var currentImg = currentDiv.firstChild;
        currentImg.setAttribute('data-theme', currentTheme);

        switch (currentImg)
        {
            case newMsgTemp: 
            default:
                currentImg.classList.add("msg-img-new");
                break;
        }
    }

    // toggle init
    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}

function setTheme(theme) {
    for (currentImg in currentCatImgList) {
        currentImg.setAttribute('data-theme', theme);
    }
    for (currentDiv in currentMsgImgList) {
        var currentImg = currentDiv.firstChild;
        currentImg.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
}

function switchTheme(e) {
    if (e.target.checked) {
        setTheme('light');
    }
    else {        
        setTheme('dark');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);