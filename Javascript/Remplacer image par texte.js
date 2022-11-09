// PLACEMENT : sur toutes les pages

$(function(){

  // BOUTON DE SUJET 
   $('.newtopic_button').replaceWith("<msgbtn class=\"newbtn\">Nouveau</msgbtn>"); // Ouvrir un nouveau sujet
   $('.reply_button').replaceWith("<msgbtn class=\"repbtn\">Répondre</msgbtn>"); // Répondre au sujet
  
   $('.newpm_button img').replaceWith("<msgbtn class=\"newbtn\">Nouveau</msgbtn>"); // Envoyer un nouveau MP
   $('.replypm_button img').replaceWith("<msgbtn class=\"repbtn\">Répondre</msgbtn>"); // Répondre au MP
  
  // BOUTON DE CONTACT 
   // Pour les boutons de contact affichée dans le profil seul, utilisez l'inspecteur d'élément pour trouver l'ID correspondant au bouton

   //$('#field_id img').replaceWith("Autre");
});