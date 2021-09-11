// kerakli packagelarni o'rgantish...
const { popular_ads, ads, services,
 doctors, news, statistics } = require('../models/read_datas');
const joi = require('joi');
class readController {

 async readData(req, res) {
  try {
   const answer = await popular_ads();
   res.status(200).json({ result: 'ok', data: answer });
  } catch (er) {
   res.status(500).json('Malumotlarni o\'qishda xatolik : ' + er);
   console.log('Bazadan qiymat olishda xatolik: ' + er);
  }
 }

}

module.exports = new readController();