const { Router } = require("express");

const router = Router();

// admin panelni yasash uchun ejs filellaridan foydalanamiz...
router.get("/login", function(req, res, next) {
    res.sendFile(__dirname + "/../views/login");
});
// asosiy data to'ldirish menusi...
router.get("/add", function(req, res, next) {
    res.render(__dirname + "/../views/form");
});
// datani chiqarish uchun page..
router.get("/view", function(req, res, next) {
    res.render(__dirname + "/../views/tables");
});

module.exports = router;