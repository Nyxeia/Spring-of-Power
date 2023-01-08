var $path = ".profile_infos .profile_main .profile_field";
var $parent = ".profile_infos";

// WITH GRADIENT
var gradient = {"background" : "var(--gradient)", 
"-webkit-background-clip" : "text",
"-webkit-text-fill-color" : "transparent"};

var labelColor = gradient;

// --------------------------

var mpFound = false;
jQuery(function () {
    $( $path ).each(function( index ) {

        var label = $(this).find('label > span:first-child');
        var field = label.html();

        var found = false;
        switch (field) {
            case "Date d'inscription":
            case "Pseudo":
            case "Genre IRL":    
            case "Messages":
            case "FC":
            case "Crédits":
                found = true;
                break;
            default: 
                break;
        } 

        if (!mpFound && !found) {
            label = $(this).find('label');
            if (label.html() == "Messages privés :") {
                found = true;
                mpFound = true;
            }
        }

        if (found) {
            $(this).parents($parent).find('.profile_player').append(this);
            label.css(labelColor);
        }
 
    });

});


jQuery(function () {
    $( $path ).each(function( index ) {

        var label = $(this).find('label > span:first-child');
        var field = label.html();

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
            $(this).parents($parent).find('.profile_bot').append(this);
            label.css(labelColor);
        }
 
    });

});


jQuery(function () {
    $( $path ).each(function( index ) {

        var label = $(this).find('label > span:first-child');
        var field = label.html();

        var found = false;
        switch (field) {
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
            $(this).parents($parent).find('.profile_top').append(this);
            label.css(labelColor);
        }
 
    });

});