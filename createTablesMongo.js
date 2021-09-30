// Asosiy packegdan obj olish...
const mongoose = require("mongoose");
// Bazaga ulanishni tekshirib ko'rish...
mongoose
  .connect("mongodb://localhost/medtimeData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb bazasiga ulanish amalga oshirildi...");
  })
  .catch((ex) => {
    console.log("Malumotlar bazasiga ulanish oxshamadi..." + ex);
  });
// tablitsani schemasini tuzub olamiz...
const popular_ads = new mongoose.Schema(
  {
    picture_path: {
      type: String,
      required: true,
    },
    title_text: {
      type: String,
      default: "new picture",
      required: true,
    },
    tag_text: String,
    put_date: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "tb_popular_ads" }
);
// analiz ro'yxatini schemasi...
const ads = new mongoose.Schema(
  {
    title_text: {
      type: String,
      required: true,
      default: "new picture",
    },
    tag_text: String,
    money: {
      type: String,
      required: true,
    },
    put_date: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "tb_ads" }
);
//  xizmat ko'rsatish turlari...
const services = new mongoose.Schema(
  {
    name_service: {
      type: String,
      required: true,
    },
    path_svg_service: {
      type: String,
      required: true,
    },
  },
  { collection: "tb_services" }
);
// doctorlar haqida qisqacha malumot tanishtirish...
const doctors = new mongoose.Schema(
  {
    type_of_treatment: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    put_date: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "tb_doctors" }
);
//  yangiliklarni taqdim qilib turish...
const news = new mongoose.Schema(
  {
    title_new_post: {
      type: String,
      required: true,
    },
    details_new_post: {
      type: String,
      required: true,
    },
    put_date: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "tb_news" }
);
//  medtime haqida statistika...
const statistics = new mongoose.Schema(
  {
    all_doctor: {
      type: String,
      required: true,
    },
    daily_result: {
      type: String,
      required: true,
    },
    annual_result: {
      type: String,
      required: true,
    },
    annual_number_of_patients: {
      type: String,
      required: true,
    },
    put_date: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "tb_statistics" }
);
// schemalardan obj olamiz va export qilamiz...
const Tb_popular_ads = mongoose.model("tb_popular_ads", popular_ads);
const Tb_ads = mongoose.model("tb_ads", ads);
const Tb_services = mongoose.model("tb_services", services);
const Tb_doctor = mongoose.model("tb_doctors", doctors);
const Tb_news = mongoose.model("tb_news", news);
const Tb_statistics = mongoose.model("tb_statistics", statistics);
// export qilib qo'yamiz moshqa filellar uchun...
module.exports = {
  Tb_popular_ads,
  Tb_ads,
  Tb_services,
  Tb_doctor,
  Tb_news,
  Tb_statistics,
};
