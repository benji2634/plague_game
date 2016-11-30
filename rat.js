var Rat = function() {
};

Rat.prototype = {
  touchFood: function(food) {
    food.isPoisoned = true;
  },
  bitePerson: function(person) {
    return "bite bite nibble nibble"
  }
};

module.exports = Rat;