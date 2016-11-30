var Villain = require('../villain');
var Food = require('../food');
var Rat = require('../rat');
var Hero = require('../hero');
var assert = require('assert');

describe( "villain", function() {

  var skeletor;
  var steak;
  var apple;
  var rat;
  var heman;

  beforeEach(function(){
    skeletor = new Villain("Skeletor", 100, "Power Sword");
    steak = new Food("Steak", 10);
    apple = new Food("Apple", 10);
    rat = new Rat();
    heman = new Hero("He-man", 100, "Power Sword", "Steak"); 
  });

  it("villain can talk", function() {
    assert.equal("I am a villain", skeletor.talk());
  });

  it("villain has name", function() {
    assert.equal("Skeletor", skeletor.name);
  });

  it("villain has health", function() {
    assert.equal(100, skeletor.health);
  });

  it("villain has weapon", function() {
    assert.equal("Power Sword", skeletor.weapon);
  });

  it("villain can eat poisoned food and increase health", function() {
    rat.touchFood(apple);
    skeletor.eat(apple);
    assert.equal(110, skeletor.health);
  });

  it("villain health is not affected when non-poisoned food is eaten", function() {
    skeletor.eat(steak);
    assert.equal(100, skeletor.health);
  });

  it("villain will lose health after being punched", function() {
    heman.punch(skeletor);
    assert.equal(80, skeletor.health);
  });

  it("hero will lose health after being attacked with weapon", function() {
    skeletor.useWeapon(heman);
    assert.equal(50, heman.health);
  });

});
