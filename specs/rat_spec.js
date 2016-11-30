var Rat = require('../rat');
var Food = require('../food');
var Hero = require('../hero');
var assert = require('assert');

describe( "rat", function() {

  var rat;
  var lettuce;
  var heman; 

  beforeEach(function(){
    rat = new Rat();
    lettuce = new Food("Lettuce", 1, true); 
    heman = new Hero("He-man", 100, "Power Sword", "Steak"); 

  });

  it("rat can touch food and change status", function() {
    rat.touchFood(lettuce);
    assert.equal(true, lettuce.isPoisoned);
  });

  // it("rat can bite a person", function() {
  //   assert.equal("bite bite nibble nibble", rat.bitePerson(heman));
  // });

});