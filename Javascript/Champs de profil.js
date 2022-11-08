$( function(){
  $('body')
    .on('click', '.p-corps', function(){

      var corps = $(this).nextAll(".p-box-corps:first");
      var esprit = $(this).nextAll(".p-box-esprit:first");
      var ame = $(this).nextAll(".p-box-ame:first");

      if (esprit.is(":visible") || ame.is(":visible")) {

        esprit.hide();
        ame.hide();
        corps.show();

        $(this).css('color', 'white');
        $(this).nextAll(".p-esprit:first").css('color', 'var(--textColor)');
        $(this).nextAll(".p-ame:first").css('color', 'var(--textColor)');

      } else {

        corps.slideToggle("fast", function() {

          if (corps.is(":visible")) {
            $(this).prevAll(".p-corps:first").css('color', 'white');
          } else {
            $(this).prevAll(".p-corps:first").css('color', 'var(--textColor)');
          }

          $(this).nextAll(".p-esprit:first").css('color', 'var(--textColor)');
          $(this).nextAll(".p-ame:first").css('color', 'var(--textColor)');

        });

      }

    });
});

$( function(){
  $('body')
    .on('click', '.p-esprit', function(){

    var corps = $(this).nextAll(".p-box-corps:first");
    var esprit = $(this).nextAll(".p-box-esprit:first");
    var ame = $(this).nextAll(".p-box-ame:first");

      if (corps.is(":visible") || ame.is(":visible")) {

        corps.hide();
        ame.hide();
        esprit.show();

        $(this).css('color', 'white');
        $(this).prevAll(".p-tab:first").css('color', 'var(--textColor)');
        $(this).nextAll(".p-tab:first").css('color', 'var(--textColor)');

      } else {

        esprit.slideToggle("fast", function() {

          if (esprit.is(":visible")) {
            $(this).prevAll(".p-esprit:first").css('color', 'white');
          } else {
            $(this).prevAll(".p-esprit:first").css('color', 'var(--textColor)');
          }

          $(this).prevAll(".p-tab:first").css('color', 'var(--textColor)');
          $(this).nextAll(".p-tab:first").css('color', 'var(--textColor)');

        });

      }

    });
});

$( function(){
    $('body')
      .on('click', '.p-ame', function(){
  
        var corps = $(this).nextAll(".p-box-corps:first");
        var esprit = $(this).nextAll(".p-box-esprit:first");
        var ame = $(this).nextAll(".p-box-ame:first");
  
        if (corps.is(":visible") || esprit.is(":visible")) {
  
          corps.hide();
          esprit.hide();
          ame.show();
  
          $(this).css('color', 'white');
          $(this).prevAll(".p-corps:first").css('color', 'var(--textColor)');
          $(this).prevAll(".p-esprit:first").css('color', 'var(--textColor)');
  
        } else {
  
          ame.slideToggle("fast", function() {
  
            if (ame.is(":visible")) {
              $(this).prevAll(".p-ame:first").css('color', 'white');
            } else {
              $(this).prevAll(".p-ame:first").css('color', 'var(--textColor)');
            }
  
            $(this).prevAll(".p-corps:first").css('color', 'var(--textColor)');
            $(this).prevAll(".p-esprit:first").css('color', 'var(--textColor)');
          });
  
        }
  
      });
  });

var $path = ".post_profile .post_userinfo .user_field";
var $parent = ".post_profile";

jQuery(function () {

    // On parcourt chaque champs des profils
    $( $path ).each(function( index ) {

        var label = $(this).find('.label > span:first-child');
        var field = label.html() ;

        var found = false;
        switch (field) {
            case "Alias":
            case "Age":
            case "Zone libre":
            case "Dollars":
            case "Statut":
            case "Occupation":
            case "Habitation":
                found = true;
                break;
            default: 
                break;
        } 

        if (found){
            $(this).parents($parent).find('.p-box-corps').append(this);
            //label.css({"color" : "#8b1b58"});
        }
 
    });

});

jQuery(function () {

    // On parcourt chaque champs des profils
    $( $path ).each(function( index ) {

        var label = $(this).find('.label > span:first-child');
        var field = label.html() ;

        var found = false;
        switch (field) {
            case "Déchirures":
            case "Altérations":
            case "Limites":
            case "Stigmates":
            case "Inventaire":
            case "Mémo RP":
                found = true;
                break;
            default: 
                break;
        } 

        if (found) {
            $(this).parents($parent).find('.p-box-esprit').append(this);
            //label.css({"color" : "#8b1b58"});
        }
 
    });

});

jQuery(function () {

    // On parcourt chaque champs des profils
    $( $path ).each(function( index ) {

        var label = $(this).find('.label > span:first-child');
        var field = label.html() ;

        var found = false;
        switch (field) {
            case "Date d'inscription":
            case "Pseudo":
            case "Messages":
            case "FC":
            case "Crédits":
            case "Thèmes abordés":
            case "Thèmes refusés":
            case "Infos RP":
            case "Comptes":
            case "Misc":
                found = true;
                break;
            default: 
                break;
        } 

        if (found) {
            $(this).parents($parent).find('.p-box-ame').append(this);
            //label.css({"color" : "#8b1b58"});
        }
 
    });

});