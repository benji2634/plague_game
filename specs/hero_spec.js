var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Villain = require('../villain');
var assert = require('assert');

describe( "hero", function() {

  var heman; 
  var food1;
  var food2;
  var food3;
  var rat1;
  var skeletor;

  beforeEach(function(){
    heman = new Hero("He-man", 100, "Power Sword", "Steak"); 
    food1 = new Food("Chicken", 10);
    food2 = new Food("Steak", 10);
    food3 = new Food("Apple", 10);
    rat1 = new Rat();
    skeletor = new Villain("Skeletor", 100, "Power Sword");
  });


  it("hero can talk", function() {
    assert.equal("I am a hero", heman.talk());
  });

  it("hero has name", function() {
    assert.equal("He-man", heman.name);
  });

  it("hero has health", function() {
    assert.equal(100, heman.health);
  });

  it("hero has weapon", function() {
    assert.equal("Power Sword", heman.weapon);
  });

  it("hero has fav food", function() {
    assert.equal("Steak", heman.favFood);
  });

  it("hero can eat food and increase health", function() {
    heman.eat(food1);
    assert.equal(110, heman.health);
  });

  it("hero can eat fav food and get health boost", function() {
    heman.eat(food2);
    assert.equal(115, heman.health);
  });

  it("hero loses health when poisoned food is eaten", function() {
    rat1.touchFood(food3);
    heman.eat(food3);
    assert.equal(50, heman.health);
  });

  it("hero still loses health when poisoned food is fav food", function() {
    rat1.touchFood(food2);
    heman.eat(food2);
    assert.equal(50, heman.health);
  });

  it("hero will lose health after being punched", function() {
    skeletor.punch(heman);
    assert.equal(90, heman.health);
  });

  it("hero will lose health after being attacked with weapon", function() {
    skeletor.useWeapon(heman);
    assert.equal(50, heman.health);
  });

});


