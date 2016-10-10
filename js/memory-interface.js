var Memory = require('./../js/memory.js').memoryModule;

$(document).ready(function() {
  var newDeck = new Memory();
  newDeck.shuffle();
  console.log(newDeck);
  var counter = 0;
  var revealedCards = 0;

  $("img").click(function(){
    var id = ($(this).attr("id")-1);
    console.log(id);
    $(this).hide();
    $(this).attr("src", "img/" + newDeck.images[id]);
    $(this).fadeIn();
  });
});
