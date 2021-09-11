// kerakli package va file dan obj olamiz...
const { Router } = require('express');
const readController = require('../controllers/send_datas');

const router = Router();

router.get('/api/readData', readController.readData);

module.exports = router;