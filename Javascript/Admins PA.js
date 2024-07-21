var focusColor = getComputedStyle(document.documentElement).getPropertyValue('--gradient');
var none = "transparent";

var focusIds = ["admin1", "admin2", "admin3", "admin4"];
let adminCount = 4; // N'oubliez pas de changer le compteur ici quand vous ajoutez/retirez des admins


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
  
    document.getElementById('admin_name').innerHTML="<span>MADDOX | ADMINISTRATEUR-MJ</span>";
    document.getElementById('admin_extra').innerHTML="Bones ✧ Présent ✧ France";

}

function admin2(){
    changeFocus(2);
  
  document.getElementById('admin_name').innerHTML="<span>ROBIN | ADMINISTRATRICE-MJ</span>";
    document.getElementById('admin_extra').innerHTML="Fern ✧ Présente ✧ Québec";

}

function admin3(){
    changeFocus(3);
  
  document.getElementById('admin_name').innerHTML="<span>BELLADONNA | ADMINISTRATRICE-MJ</span>";
    document.getElementById('admin_extra').innerHTML="Valkyrja ✧ Présente ✧ France";

}

function admin4(){
    changeFocus(4);
  
  document.getElementById('admin_name').innerHTML="<span>VOUS ?</span>";
    document.getElementById('admin_extra').innerHTML="✧ Le staff recrute! ✧";

}