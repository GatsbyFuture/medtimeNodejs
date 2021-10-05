// collectiondan kelgan barcha malumotlarni jo'natish...
const {
  Tb_popular_ads,
  Tb_ads,
  Tb_services,
  Tb_doctor,
  Tb_news,
  Tb_statistics,
} = require("../createTablesMongo");
// popularni datasini kiritish...
async function createPopular(reqB) {
  try {
    const lodge = new Tb_popular_ads({
      picture_path: reqB.picture_path,
      title_text: reqB.title_text,
      tag_text: reqB.tag_text,
    });
    await lodge.save();
    return { result: true, data: "Popular data joylandi!" };
  } catch (ex) {
    console.log("Popular datani joylashda xatolik :" + ex);
    return { result: false, data: "Popular datani joylashda xatolik" };
  }
}
//
async function createAds(data) {
  try {
    const lodge = new Tb_ads({
      title_text: data.title_text,
      tag_text: data.tag_text,
      money: data.money,
    });
    await lodge.save();
  } catch (ex) {
    console.log("createAds datani joylashda xatolik :" + ex);
  }
}
//
async function createServices(data) {
  try {
    const lodge = new Tb_services({
      name_service: data.name_service,
      path_svg_service: data.path_svg_service,
    });
    await lodge.save();
  } catch (ex) {
    console.log(" path_svg_service datani joylashda xatolik :" + ex);
  }
}
//
async function createDoctor(data) {
  try {
    const lodge = new Tb_doctor({
      type_of_treatment: data.type_of_treatment,
      details: data.details,
    });
    await lodge.save();
  } catch (ex) {
    console.log(" Tb_doctor datani joylashda xatolik :" + ex);
  }
}
//
async function createNews(data) {
  try {
    const lodge = new Tb_news({
      title_new_post: data.title_new_post,
      details_new_post: data.details_new_post,
    });
    await lodge.save();
  } catch (ex) {
    console.log("Tb_news datani joylashda xatolik :" + ex);
  }
}
//
async function createStatistics(data) {
  try {
    const lodge = new Tb_statistics({
      all_doctor: data.all_doctor,
      daily_result: data.daily_result,
      annual_result: data.annual_result,
      annual_number_of_patients: data.annual_number_of_patients,
    });
    await lodge.save();
  } catch (ex) {
    console.log("Tb_statistics datani joylashda xatolik :" + ex);
  }
}
// controllerga funksiyalarni yetkazish...
module.exports = {
  createPopular,
  createAds,
  createServices,
  createDoctor,
  createNews,
  createStatistics,
};
