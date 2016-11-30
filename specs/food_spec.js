var Food = require('../food');
var assert = require('assert');

describe( "food", function() {

  var food1;

  beforeEach(function() {
  food1 = new Food("Chicken", 10, true); 
  });

  it("food has name", function() {
    assert.equal("Chicken", food1.name);
  });

  it("food has energy", function() {
    assert.equal(10, food1.energy);
  });

});