var focusColor = getComputedStyle(document.documentElement).getPropertyValue('--gradient');
var none = "transparent";

var focusIds = ["admin1", "admin2", "admin3", "admin4", "admin5", "admin6"];
let adminCount = 6;


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

    document.getElementById('admin_name').innerHTML="<span>DARIUS | FONDATRICE</span>";
    document.getElementById('admin_extra').innerHTML="Nyxeia ⬩ Présente ⬩ Québec";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u2";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=2";
}

function admin2(){
    changeFocus(2);
  
    document.getElementById('admin_name').innerHTML="<span>LETA | FONDATRICE</span>";
    document.getElementById('admin_extra').innerHTML="Ellaenys ⬩ Présente ⬩ France";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u3";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=3";
}

function admin3(){
    changeFocus(3);
  
    document.getElementById('admin_name').innerHTML="<span>SETH | ADMINISTRATRICE </span>";
    document.getElementById('admin_extra').innerHTML="Syato ⬩ Présente ⬩ France";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u16";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=16";
}

function admin4(){
    changeFocus(4);
  
    document.getElementById('admin_name').innerHTML="<span>CHAD | ADMINISTRATEUR-MJ</span>";
    document.getElementById('admin_extra').innerHTML="Bones ⬩ Présent ⬩ France";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u149";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=149";
}

function admin5(){
    changeFocus(5);
  
  document.getElementById('admin_name').innerHTML="<span>ROBIN | ADMINISTRATRICE-MJ</span>";
    document.getElementById('admin_extra').innerHTML="Fern ⬩ Présente ⬩ Québec";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u55";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=55";
}

function admin6(){
    changeFocus(6);
  
  document.getElementById('admin_name').innerHTML="<span>BELLADONNA | MODÉRATRICE</span>";
    document.getElementById('admin_extra').innerHTML="Valkyrja ⬩ Présente ⬩ France";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u294";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=294";
}