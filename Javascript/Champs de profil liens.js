$(function() {
    var el = $('.profil_contact');
      
      el.find('img[src="https://2img.net/img.icons8.com/small/32/ffffff/name.png"]').replaceWith('<tag>Présentation</tag>');
      el.find('img[src="https://images2.imgbox.com/ba/03/D1iNQo0J_o.png"]').replaceWith('<tag>Carnet de bord</tag>');
      el.find('img[src="https://img.icons8.com/ios-glyphs/30/000000/list--v1.png"]').replaceWith('<tag>Page ARGO</tag>');
      el.find('img[src="https://2img.net/img.icons8.com/small/32/ffffff/communication.png"]').replaceWith('<tag>Message privé</tag>');
    });