const { Router } = require("express");

const router = Router();

// admin panelni yasash uchun ejs filellaridan foydalanamiz...
router.get("/login", function(req, res, next) {
    res.render("login");
});
// asosiy data to'ldirish menusi...
router.get("/add", function(req, res, next) {
    res.render("form");
});
// datani chiqarish uchun page..
router.get("/view", function(req, res, next) {
    res.render("tables");
});

module.exports = router;