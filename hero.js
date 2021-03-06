
var Hero = function(name, health, weapon, favFood) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
  this.favFood = favFood;
};

Hero.prototype = {
  talk: function() {
    return "I am a hero";
  },
  eat: function(food) {
    if (food.isPoisoned === true) {
      food.energy = -50;
      this.health += food.energy;
      return;
    }
    if (food.name === this.favFood) {
      food.energy *= 1.5;
    }
    this.health += food.energy;
  },
  punch: function(enemy) {
    if (this.health > 0) {
      enemy.health -= 20;
    }
  },
  useWeapon: function(enemy) {
    if (this.health >= 100) {
      enemy.health -= 50;
    }
  }
}

module.exports = Hero;