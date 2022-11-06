$(function() {
    var el = $('.profil_contact');
      
      el.find('img[src="https://img.icons8.com/small/32/ffffff/name.png"]').replaceWith('<tag>Présentation</tag>');
      el.find('img[src="https://img.icons8.com/small/32/ffffff/link.png"]').replaceWith('<tag">Fiche de liens</tag>');
      el.find('img[src="https://img.icons8.com/ios-glyphs/30/000000/list--v1.png"]').replaceWith('<tag>Fiche de RP</tag>');
      el.find('img[src="https://2img.net/img.icons8.com/small/32/ffffff/communication.png"]').replaceWith('<tag>Message privé</tag>');
    });