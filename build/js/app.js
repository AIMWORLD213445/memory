(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/memory.js":2}],2:[function(require,module,exports){
function Memory(){
  this.images = ["hierophant.jpg", "death.jpg", "world.jpg", "lovers.jpg", "wof.jpg", "hierophant.jpg", "death.jpg", "world.jpg", "lovers.jpg", "wof.jpg"];
}

Memory.prototype.shuffle = function() {
  var unshuffled = this.images;
  var shuffled = [];
  var transfer = this.images.length;
  while (transfer > 0) {
    var index = Math.floor(Math.random() * transfer);
    shuffled.push(unshuffled[index]);
    unshuffled.splice(index, 1);
    transfer--;
  }
  this.images = shuffled;
}



exports.memoryModule = Memory;

},{}]},{},[1]);
