var Rat = require('../rat');
var Food = require('../food');
var assert = require('assert');

describe( "rat", function() {

  var rat1;
  var food1; 

  beforeEach(function(){
    rat1 = new Rat();
    food1 = new Food("Lettuce", 1, true); 
  });

  it("rat can touch food and change status", function() {
    rat1.touchFood(food1);
    assert.equal(true, food1.isPoisoned);
  });

});