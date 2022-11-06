$( function(){
  $('body')
    .on('click', '.p-corps', function(){

      var corps = $(this).nextAll(".p-box-corps:first");
      var esprit = $(this).nextAll(".p-box-esprit:first");

      if (esprit.is(":visible")) {

        esprit.hide();
        corps.show();

        $(this).css('color', 'white');
        $(this).nextAll(".p-tab:first").css('color', 'var(--textColor)');

      } else {

        corps.slideToggle("fast", function() {

          if (corps.is(":visible")) {
            $(this).prevAll(".p-corps:first").css('color', 'white');
          } else {
            $(this).prevAll(".p-corps:first").css('color', 'var(--textColor)');
          }

          $(this).nextAll(".p-tab:first").css('color', 'var(--textColor)');

        });

      }

    });
});

$( function(){
  $('body')
    .on('click', '.p-esprit', function(){

    var corps = $(this).nextAll(".p-box-corps:first");
    var esprit = $(this).nextAll(".p-box-esprit:first");

      if (corps.is(":visible")) {

        corps.hide();
        esprit.show();

        $(this).css('color', 'white');
        $(this).prevAll(".p-tab:first").css('color', 'var(--textColor)');

      } else {

        esprit.slideToggle("fast", function() {

          if (esprit.is(":visible")) {
            $(this).prevAll(".p-esprit:first").css('color', 'white');
          } else {
            $(this).prevAll(".p-esprit:first").css('color', 'var(--textColor)');
          }

          $(this).prevAll(".p-tab:first").css('color', 'var(--textColor)');


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
          case "D.D.N.":
          case "Genre":
          case "Mutation":
          case "Contre-coup":
          case "Situation":
          case "Lieu d'habitation":
          case "Zone libre":
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
          case "Messages":
          case "Dollars":
          case "Avatar":
          case "Pseudo":
          case "Date d'inscription":
          case "Lieu d'habitation":
          case "Crédits":
          case "Multis":
          case "Infos RP":
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