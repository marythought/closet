//constructor function, capital letter is convention
var Clothing = function(name, type, color, season) {
  this.name = name;
  this.type = type;
  this.color = color;
  this.season = season;
}

var Closet = function(name, size) {
  this.name = name;
  this.size = size || 37;
  this.contents = [];
}

Closet.prototype.spaceLeft = function() {
  console.log("closet space available for " + this.size + " more items");
}

Closet.prototype.add = function(clothing) {
  if (this.size == 0){
    console.log("closet full! free up some space and try again");
  } else {
    this.contents.push(clothing);
    this.size--;
  };
}

// Closet.prototype.removeFromCloset = function(clothing) {
//   if (this.contents.includes(clothing)){
//     this.contents.remove(clothing)
//     this.size++;
//     console.log("removed!")
//   } else {
//     console.log("Item not found!");
//   };
// }

Closet.prototype.list = function(){
  console.log("closet contains " + this.contents.length + " items:");
  for (var i = 0; i < this.contents.length; i++) {
    console.log(this.contents[i].name);
  };
}

module.exports = {
  Closet: Closet,
  Clothing: Clothing
}


