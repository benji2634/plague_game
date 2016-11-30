var Food = require('../food');
var assert = require('assert');

describe( "food", function() {

  var chicken;

  beforeEach(function() {
  chicken = new Food("Chicken", 10, true); 
  });

  it("food has name", function() {
    assert.equal("Chicken", chicken.name);
  });

  it("food has energy", function() {
    assert.equal(10, chicken.energy);
  });

});