var Rat = function() {
};

Rat.prototype = {
  touchFood: function(food) {
    food.isPoisoned = true;
  },
  bitePerson: function(person) {
    person.health -= 5;
  }
};

module.exports = Rat;