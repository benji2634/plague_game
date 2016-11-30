var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Villain = require('../villain');
var assert = require('assert');

describe( "hero", function() {

  var heman; 
  var chicken;
  var steak;
  var apple;
  var rat;
  var skeletor;

  beforeEach(function(){
    heman = new Hero("He-man", 100, "Power Sword", "Steak"); 
    chicken = new Food("Chicken", 10);
    steak = new Food("Steak", 10);
    apple = new Food("Apple", 10);
    rat = new Rat();
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
    heman.eat(chicken);
    assert.equal(110, heman.health);
  });

  it("hero can eat fav food and get health boost", function() {
    heman.eat(steak);
    assert.equal(115, heman.health);
  });

  it("hero loses health when poisoned food is eaten", function() {
    rat.touchFood(apple);
    heman.eat(apple);
    assert.equal(50, heman.health);
  });

  it("hero still loses health when poisoned food is fav food", function() {
    rat.touchFood(steak);
    heman.eat(steak);
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

  it("hero will lose health if bitten by rat", function() {
    rat.bitePerson(heman);
    assert.equal(95, heman.health);
  });

});


