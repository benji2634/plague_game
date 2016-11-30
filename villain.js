
var Villain = function(name, health, weapon) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
};

Villain.prototype = {
  talk: function() {
    return "I am a villain";
  },
  eat: function(food) {
    if (food.isPoisoned === true) {
      this.health += food.energy;
      return;
    }
    if (food.isPoisoned === false) {
      food.energy = 0;
    }
    this.health += food.energy;
  },
  punch: function(enemy) {
    if (this.health > 0) {
      enemy.health -= 10;
    }
  },
  useWeapon: function(enemy) {
    if (this.health >= 100) {
      enemy.health -= 50;
    }
  }

}

module.exports = Villain;