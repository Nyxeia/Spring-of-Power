// PLACEMENT : sur toutes les pages

$(function(){

  // BOUTON DE SUJET 
   $('.newtopic_button').replaceWith("<msgbtn class=\"newbtn\">Nouveau</msgbtn>"); // Ouvrir un nouveau sujet
   $('.reply_button').replaceWith("<msgbtn class=\"repbtn\">Répondre</msgbtn>"); // Répondre au sujet
  
   $('.newpm_button img').replaceWith("<msgbtn class=\"newbtn\">Nouveau</msgbtn>"); // Envoyer un nouveau MP
   $('.replypm_button img').replaceWith("<msgbtn class=\"repbtn\">Répondre</msgbtn>"); // Répondre au MP
});

$(function() {
  var el = $('.profil_contact');
    
    el.find('img[src="https://2img.net/img.icons8.com/small/32/ffffff/name.png"]').replaceWith('<tag>Présentation</tag>');
    el.find('img[src="https://images2.imgbox.com/ba/03/D1iNQo0J_o.png"]').replaceWith('<tag>Carnet de bord</tag>');
    el.find('img[src="https://img.icons8.com/ios-glyphs/30/000000/list--v1.png"]').replaceWith('<tag>Page ARGO</tag>');
    el.find('img[src="https://2img.net/img.icons8.com/small/32/ffffff/communication.png"]').replaceWith('<tag>Message privé</tag>');
  });

$(function() {
var el = $('.profile_contact');
  
  el.find('img[src="https://2img.net/img.icons8.com/small/32/ffffff/name.png"]').replaceWith('<ltag>Présentation</ltag>');
  el.find('img[src="https://images2.imgbox.com/ba/03/D1iNQo0J_o.png"]').replaceWith('<ltag>Carnet de bord</ltag>');
  el.find('img[src="https://img.icons8.com/ios-glyphs/30/000000/list--v1.png"]').replaceWith('<ltag>Page ARGO</ltag>');
  el.find('img[src="https://2img.net/img.icons8.com/small/32/ffffff/communication.png"]').replaceWith('<ltag>Message privé</ltag>');
});

$(function() {
  var el = $('.forumbg-table');
    
    el.find('img[src="https://2img.net/img.icons8.com/small/32/ffffff/name.png"]').replaceWith('<ltag>Présentation</ltag>');
    el.find('img[src="https://2img.net/img.icons8.com/small/32/ffffff/communication.png"]').replaceWith('<ltag>MP</ltag>');
  });