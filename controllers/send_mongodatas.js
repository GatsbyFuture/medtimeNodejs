// moduldan obj olib olamiz...
const {
  Popular_Ads,
  Ads,
  Services,
  Doctor,
  News,
  Statistics,
} = require("../models/readMongo_datas");
// controller class ochib olamiz va datani routerga uzatamiz...
class readControllerMongodb {
  async readData(req, res) {
    let objData = {};
    try {
      objData.popular_ads = await Popular_Ads();
    } catch (err) {
      res.status(500).json('"popular_ads" dan o\'qishda xatolik : ' + err);
    }
    try {
      objData.ads = await Ads();
    } catch (err) {
      res.status(500).json('"ads" dan o\'qishda xatolik : ' + err);
    }
    try {
      objData.services = await Services();
    } catch (err) {
      res.status(500).json('"services" o\'qib olishda xatolik');
    }
    try {
      objData.doctors = await Doctor();
    } catch (err) {
      res.status(500).json('"octors" o\'qib olishda xatolik');
    }
    try {
      objData.news = await News();
    } catch (err) {
      res.status(500).json('"news" o\'qib olishda xatolik');
    }
    try {
      objData.statistics = await Statistics();
    } catch (err) {
      res.status(500).json('"statistics" o\'qib olishda xatolik');
    }
    // yig'ilgan malumotlarni bitta json formatda chirqarib yuborish...
    res.status(200).json({ result: "ok", data: objData });
  }
}

module.exports = new readControllerMongodb();
