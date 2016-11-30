
var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
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
  }
}

module.exports = Hero;