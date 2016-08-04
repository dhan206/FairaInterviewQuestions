'use strict';

$(document).ready(function() {
    
    var imageNames = ['arcanine', 'blastoise', 'charizard', 'electabuzz', 'gyarados', 'mew', 'mewtwo', 'ninetales', 'psyduck', 'raichu'];
    imageNames.forEach(function(element) {
        $('#image_container').append('<img class="pokemon_image" src="images/' + element + '.jpg" alt="image of the pokemon' + element + '">');
    })
    
    $('.pokemon_image').mouseover(function() {
        var images = $('img');
        for (var i = 0; i < images.length; i++) {
            if(images[i] != this) {
                $(images[i]).addClass('black_and_white');
            }
        }
    })
    
    $('.pokemon_image').mouseleave(function() {
        var images = $('img');
        for (var i = 0; i < images.length; i++) {
            $(images[i]).removeClass('black_and_white');
        }
    })
    
});