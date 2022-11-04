var $path = ".post_profile .post_userinfo .user_field";
var $parent = ".post_profile";

$( function(){
  $('body')
    .on('click', '.profil-rp', function(){

      var rpBox = $(this).nextAll(".profil-box-rp:first");
      var hrpBox = $(this).nextAll(".profil-box-hrp:first");

      if (hrpBox.is(":visible")) {

        hrpBox.hide();
        rpBox.show();

        $(this).css('color', 'white');
        $(this).nextAll(".profil-hrp:first").css('color', 'transparent');

      } else {

        rpBox.slideToggle("fast", function() {

          if (rpBox.is(":visible")) {
            $(this).prevAll(".profil-rp:first").css('color', 'white');
          } else {
            $(this).prevAll(".profil-rp:first").css('color', 'transparent');
          }

          $(this).nextAll(".profil-hrp:first").css('color', 'transparent');

        });

      }

    });
});

$( function(){
  $('body')
    .on('click', '.profil-hrp', function(){

      var rpBox = $(this).nextAll(".profil-box-rp:first");
      var hrpBox = $(this).nextAll(".profil-box-hrp:first");

      if (rpBox.is(":visible")) {

        rpBox.hide();
        hrpBox.show();

        $(this).css('color', 'white');
        $(this).prevAll(".profil-rp:first").css('color', 'transparent');

      } else {

        hrpBox.slideToggle("fast", function() {

          if (hrpBox.is(":visible")) {
            $(this).prevAll(".profil-hrp:first").css('color', 'white');
          } else {
            $(this).prevAll(".profil-hrp:first").css('color', 'transparent');
          }

          // Previous since the hrp button comes after the rp button in the html code
          $(this).prevAll(".profil-rp:first").css('color', 'transparent');


        });

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
            $(this).parents($parent).find('.profil-box-rp').append(this);
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
            $(this).parents($parent).find('.profil-box-hrp').append(this);
            //label.css({"color" : "#8b1b58"});
        }
 
    });

});