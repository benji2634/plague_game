var Rat = function() {
};

Rat.prototype = {
  touchFood: function(food) {
    food.isPoisoned = true;
  }
};

module.exports = Rat;