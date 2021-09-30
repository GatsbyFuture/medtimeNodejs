// kerakli packagelarni o'rgantish...
const {
  popular_ads,
  ads,
  services,
  doctors,
  news,
  statistics,
} = require("../models/read_datas");
const joi = require("joi");
class readController {
  async readData(req, res) {
    let objData = {};
    try {
      objData.popular_ads = await popular_ads();
    } catch (err) {
      res.status(500).json('"popular_ads" dan o\'qishda xatolik : ' + err);
    }
    try {
      objData.ads = await ads();
    } catch (err) {
      res.status(500).json('"ads" dan o\'qishda xatolik : ' + err);
    }
    try {
      objData.services = await services();
    } catch (err) {
      res.status(500).json('"services" o\'qib olishda xatolik');
    }
    try {
      objData.doctors = await doctors();
    } catch (err) {
      res.status(500).json('"octors" o\'qib olishda xatolik');
    }
    try {
      objData.news = await news();
    } catch (err) {
      res.status(500).json('"news" o\'qib olishda xatolik');
    }
    try {
      objData.statistics = await statistics();
    } catch (err) {
      res.status(500).json('"statistics" o\'qib olishda xatolik');
    }
    // yig'ilgan malumotlarni bitta json formatda chirqarib yuborish...
    res.status(200).json({ result: "ok", data: objData });
  }
}

module.exports = new readController();
