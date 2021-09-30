// barcha malumotlarni mongodbdan olib controllerga jo'natish...
const {
  Tb_popular_ads,
  Tb_ads,
  Tb_services,
  Tb_doctor,
  Tb_news,
  Tb_statistics,
} = require("../createTablesMongo");

async function Popular_Ads() {
  try {
    return await Tb_popular_ads.find()
      .skip(0)
      .limit(6)
      .select("picture_path title_text tag_text -_id");
  } catch (ex) {
    console.log("Tb_popular_adsni bazadan olishda xatolik");
  }
}
async function Ads() {
  try {
    return await Tb_ads.find()
      .skip(0)
      .limit(6)
      .select("title_text tag_text money");
  } catch (ex) {
    console.log("Tb_adsni bazadan olishda xatolik");
  }
}
async function Services() {
  try {
    return await Tb_services.find()
      .skip(0)
      .limit(6)
      .select("name_service path_svg_service -_id");
  } catch (ex) {
    console.log("Tb_servicesni bazadan olishda xatolik");
  }
}
async function Doctor() {
  try {
    return await Tb_doctor.find()
      .skip(0)
      .limit(6)
      .select("type_of_treatment details");
  } catch (ex) {
    console.log("Tb_doctorni bazadan olishda xatolik");
  }
}
async function News() {
  try {
    return await Tb_news.find()
      .skip(0)
      .limit(6)
      .select("title_new_post details_new_post put_date");
  } catch (ex) {
    console.log("Tb_newsni bazadan olishda xatolik");
  }
}
async function Statistics() {
  try {
    return await Tb_statistics.find()
      .skip(0)
      .limit(6)
      .select(
        "all_doctor daily_result annual_result annual_number_of_patients"
      );
  } catch (ex) {
    console.log("Tb_statisticsni bazadan olishda xatolik");
  }
}
// export qilamiz controllerga...
module.exports = {
  Popular_Ads,
  Ads,
  Services,
  Doctor,
  News,
  Statistics,
};
