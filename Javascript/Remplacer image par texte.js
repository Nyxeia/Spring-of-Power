// PLACEMENT : sur toutes les pages

$(function() {
  var el = $('#main-content');
    
    el.find('img[src="https://2img.net/zupimages.net/up/22/42/hkuc.png"]').replaceWith('<msgbtn class=\"newbtn\">Nouveau</msgbtn>');
    el.find('img[src="https://2img.net/zupimages.net/up/22/42/odyw.png"]').replaceWith('<msgbtn class=\"repbtn\">Répondre</msgbtn>');
    el.find('img[src="https://2img.net/zupimages.net/up/22/42/tpii.png"]').replaceWith('<msgbtn class=\"repbtn\">Verrouillé</msgbtn>');
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

  $(function() {
    var el = $('.message_profil');
      
      el.find('img[src="https://2img.net/images2.imgbox.com/ba/03/D1iNQo0J_o.png"]').replaceWith('<ltag>Profil</ltag>');
    });