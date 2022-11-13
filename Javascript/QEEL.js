function show_grp_img() {
    document.getElementById('group_desc_img').style.display="block";
    document.getElementById('group_desc_box').style.display="none";
}

function hide_grp_img() {
    document.getElementById('group_desc_img').style.display="none";
    document.getElementById('group_desc_box').style.display="block";
}

function icarus(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="ICARUS PHENOMENON";
    document.getElementById('group_desc_title').style.color="var(--icarus)";
}
 
function theseus(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="THESEUS PARADOX";
    document.getElementById('group_desc_title').style.color="var(--theseus)";
}

function twilight(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="TWILIGHT ZONE";
    document.getElementById('group_desc_title').style.color="var(--twilight)";
}

function hybrid(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="HYBRID THEORY";
    document.getElementById('group_desc_title').style.color="var(--hybrid)";
}

function disaster(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="TOMORROW'S DISASTER";
    document.getElementById('group_desc_title').style.color="var(--disaster)";
}

function pnj(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="PNJ";
    document.getElementById('group_desc_title').style.color="var(--pnj)";
}