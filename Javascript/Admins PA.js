var focusColor = getComputedStyle(document.documentElement).getPropertyValue('--gradient');
var none = "transparent";

var focusIds = ["admin1", "admin2", "admin3"];
let adminCount = 3;


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
  
    document.getElementById('admin_name').innerHTML="<span>YSOLD ASHFORD</span>";
    document.getElementById('admin_extra').innerHTML="PEG ⬩ PRÉSENT ⬩ NORMANDIE";
    document.getElementById('admin_profil').href="https://springofpower.forumactif.com/u4";
    document.getElementById('admin_mp').href="https://springofpower.forumactif.com/privmsg?mode=post&u=4";
}