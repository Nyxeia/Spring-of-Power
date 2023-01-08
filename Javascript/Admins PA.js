var focusColor = getComputedStyle(document.documentElement).getPropertyValue('--gradient');
var none = "transparent";

var focusIds = ["admin1", "admin2", "admin3", "admin4", "admin5"];
let adminCount = 5;


function changeFocus(position) {
    position = position - 1;
    for (let i = 0; i < adminCount; ++i) {
        if (i == position) {
            document.getElementById(focusIds[i]).style.background=focusColor;
        } else {
            document.getElementById(focusIds[i]).style.background=none;
        }
    }
}

    
function admin1(){
    changeFocus(1);

    document.getElementById('admin_name').innerHTML="<span>DARIUS SINCLAIR</span>";
    document.getElementById('admin_extra').innerHTML="NYXEIA ⬩ PRÉSENTE ⬩ QUÉBEC";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u2";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=2";
}

function admin2(){
    changeFocus(2);
  
    document.getElementById('admin_name').innerHTML="<span>LETA EYRE</span>";
    document.getElementById('admin_extra').innerHTML="ELLAENYS ⬩ PRÉSENTE ⬩ AUVERGNE";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u3";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=3";
}

function admin3(){
    changeFocus(3);
  
    document.getElementById('admin_name').innerHTML="<span>SETH AVERY</span>";
    document.getElementById('admin_extra').innerHTML="SYATO ⬩ PRÉSENTE ⬩ HAUTE-GARONNE";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u16";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=16";
}

function admin4(){
    changeFocus(4);
  
    document.getElementById('admin_name').innerHTML="<span>NORA G. MEYERS</span>";
    document.getElementById('admin_extra').innerHTML="ARKELLANA ⬩ PRÉSENTE ⬩ XXXXX";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u7";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=7";
}

function admin5(){
    changeFocus(5);
  
    document.getElementById('admin_name').innerHTML="<span>KIAN AZARIAN</span>";
    document.getElementById('admin_extra').innerHTML="UNDERRATED BOOGEYMAN ⬩ PRÉSENT ⬩ XXXXX";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u33";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=33";
}