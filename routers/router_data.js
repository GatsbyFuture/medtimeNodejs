// kerakli package va file dan obj olamiz...
const { Router } = require("express");
// const readController = require('../controllers/send_datas');
const readControllerMongo = require("../controllers/send_mongodatas");
const ControllerMongo = require("../controllers/crud_mongodatas");

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
// router.get('/api/readData', readController.readData);
router.get("/api/readData", readControllerMongo.readData);
router.post("/api/PopularData", ControllerMongo.createPopularData);
module.exports = router;