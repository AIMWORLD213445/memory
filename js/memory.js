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
