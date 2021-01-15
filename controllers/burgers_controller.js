const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

// GET ROUTE
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.selectAllBurgers(function(burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burgers/create", function(req, res) {
    burger.createBurger(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res) {
    burger.eatBurger(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;