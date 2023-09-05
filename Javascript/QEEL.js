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

    var desc = "Ils considèrent les <e1 class=\"icarus\">mutants</e1> comme l'évolution ultime. S'ils n'en sont pas déjà, ils les envient plus ou moins secrètement. ";

    document.getElementById('group_desc_text').innerHTML=desc;
}
 
function theseus(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="THESEUS PARADOX";
    document.getElementById('group_desc_title').style.color="var(--theseus)";

    var desc = "<e1 class=\"theseus\">L'humain cybernétique</e1> représente leur véritable évolution humaine. Ils placent leur foi en la technologie plutôt qu'en le sérum.";

    document.getElementById('group_desc_text').innerHTML=desc;
}

function twilight(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="TWILIGHT ZONE";
    document.getElementById('group_desc_title').style.color="var(--twilight)";

    var desc = "Eux ont fait le choix de ne pas prendre position. <e1 class=\"twilight\">Neutres</e1> par excellence, ils privilégient leur survie et leur vision du monde.";

    document.getElementById('group_desc_text').innerHTML=desc;
}

function hybrid(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="HYBRID THEORY";
    document.getElementById('group_desc_title').style.color="var(--hybrid)";

    var desc = "Soutenant une autre forme de neutralité, ils sont plutôt en faveur de <e1 class=\"hybrid\">transcender</e1> l'être humain quels que soient les moyens utilisés.";

    document.getElementById('group_desc_text').innerHTML=desc;
}

function disaster(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="TOMORROW'S DISASTER";
    document.getElementById('group_desc_title').style.color="var(--disaster)";

    var desc = "Pour eux, le sérum tout comme les altérations sont des reflets de l'inévitable <e1 class=\"disaster\">décadence</e1> de l'esprit humain.";

    document.getElementById('group_desc_text').innerHTML=desc;
}

function pnj(){
    hide_grp_img();
    document.getElementById('group_desc_title').innerHTML="PNJ";
    document.getElementById('group_desc_title').style.color="var(--pnj)";

    var desc = "Ce sont les PNJs du forum, principalement utilisés pour animer les intrigues et les événements.";

    document.getElementById('group_desc_text').innerHTML=desc;
}