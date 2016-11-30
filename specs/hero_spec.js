var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var assert = require('assert');

describe( "hero", function() {

  var hero1; 
  var food1;
  var food2;
  var food3;
  var rat1;

  beforeEach(function(){
    hero1 = new Hero("He-man", 100, "Steak"); 
    food1 = new Food("Chicken", 10);
    food2 = new Food("Steak", 10);
    food3 = new Food("Apple", 10);
    rat1 = new Rat();
  });


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

  it("hero can eat food and increase health", function() {
    hero1.eat(food1);
    assert.equal(110, hero1.health);
  });

  it("hero can eat fav food and get health boost", function() {
    hero1.eat(food2);
    assert.equal(115, hero1.health);
  });

  it("hero loses health when poisoned food is eaten", function() {
    rat1.touchFood(food3);
    hero1.eat(food3);
    assert.equal(50, hero1.health);
  });

  it("hero still loses health when poisoned food is fav food", function() {
    rat1.touchFood(food2);
    hero1.eat(food2);
    assert.equal(50, hero1.health);
  });


});