var Villain = require('../villain');
var Food = require('../food');
var Rat = require('../rat');
var Hero = require('../hero');
var assert = require('assert');

describe( "villain", function() {

  var skeletor;
  var food1;
  var food2;
  var food3;
  var rat1;
  var heman;

  beforeEach(function(){
    skeletor = new Villain("Skeletor", 100, "Power Sword");
    food1 = new Food("Chicken", 10);
    food2 = new Food("Steak", 10);
    food3 = new Food("Apple", 10);
    rat1 = new Rat();
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
    rat1.touchFood(food3);
    skeletor.eat(food3);
    assert.equal(110, skeletor.health);
  });

  it("villain health is not affected when non-poisoned food is eaten", function() {
    skeletor.eat(food2);
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
