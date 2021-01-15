const orm = require("../config/orm.js");

let burger = {
    selectAllBurgers: function (cb) {
    orm.selectAll("burgers", function (results) {
            cb(results);
        });
    },
    createBurger: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
    },
    eatBurger: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;