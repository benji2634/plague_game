var Hero = require('../hero');
var assert = require('assert');

describe( "hero", function() {

  var hero1 = new Hero("He-man", 100, "Steak") 

  it("hero can talk", function() {
    assert.equal("I am a hero", hero1.talk());
  });

  it("hero has name", function() {
    assert.equal("He-man", hero1.name);
  });

  it("hero has health", function() {
    assert.equal(100, hero1.health);
  });

  it("hero has fav food", function() {
    assert.equal("Steak", hero1.favFood);
  });

});