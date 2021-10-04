// kerakli package va file dan obj olamiz...
const { Router } = require("express");
// const readController = require('../controllers/send_datas');
const readControllerMongo = require("../controllers/send_mongodatas");
const ControllerMongo = require("../controllers/crud_mongodatas");

const router = Router();

// router.get('/api/readData', readController.readData);
router.get("/api/readData", readControllerMongo.readData);
router.post("/api/PopularData", ControllerMongo.createPopularData);
module.exports = router;