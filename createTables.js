// Barcha tablitsalar dynamic ochilishini taminlash...
const knex = require("./db/connectdb");

async function createDataTables() {
  console.log("Jadvallarni yaratish boshlandi...");
  // populyarni analizlar yani reklamar...
  try {
    await knex.schema.createTable("tb_popular_ads", (table) => {
      table.increments("id");
      table.string("picture_path");
      table.string("title_text").notNullable().defaultTo("new picture");
      table.string("tag_text");
      table
        .datetime("put_date")
        .notNullable()
        .defaultTo(knex.fn.now())
        .collate("utf8_unicode_ci");
    });
    console.log("tb_popular_ads muvoffaqiyatli yaratildi...");
  } catch (ex) {
    console.log("tb_popular_ads da xatolik : " + ex);
  }
  // analizlar ro'yxati...
  try {
    await knex.schema.createTable("tb_ads", (table) => {
      table.increments("id");
      table.string("title_text").notNullable().defaultTo("new picture");
      table.string("tag_text");
      table.string("money").notNullable();
      table
        .datetime("put_date")
        .notNullable()
        .defaultTo(knex.fn.now())
        .collate("utf8_unicode_ci");
    });
    console.log("tb_ads muvoffaqiyatli yaratildi...");
  } catch (ex) {
    console.log("tb_ads da xatolik : " + ex);
  }
  //  xizmat ko'rsatish turlari...
  try {
    await knex.schema.createTable("tb_services", (table) => {
      table.increments("id");
      table.string("name_service").notNullable();
      table.string("path_svg_service").notNullable();
    });
    console.log("tb_services muvoffaqiyatli yaratildi...");
  } catch (ex) {
    console.log("tb_services da xatolik : " + ex);
  }
  //  doctorlar haqida qisqacha malumot tanishtirish...
  try {
    await knex.schema.createTable("tb_doctors", (table) => {
      table.increments("id_doctor");
      table.string("type_of_treatment").notNullable();
      table.string("details").notNullable();
      table
        .datetime("put_date")
        .notNullable()
        .defaultTo(knex.fn.now())
        .collate("utf8_unicode_ci");
    });
    console.log("tb_doctors muvoffaqiyatli yaratildi...");
  } catch (ex) {
    console.log("tb_doctors da xatolik : " + ex);
  }
  //  yangiliklarni taqdim qilib turish...
  try {
    await knex.schema.createTable("tb_news", (table) => {
      table.increments("id_new_post");
      table.string("title_new_post").notNullable();
      table.string("details_new_post").notNullable();
      table
        .datetime("put_date")
        .notNullable()
        .defaultTo(knex.fn.now())
        .collate("utf8_unicode_ci");
    });
    console.log("tb_news muvoffaqiyatli yaratildi...");
  } catch (ex) {
    console.log("tb_news da xatolik : " + ex);
  }
  //  medtime haqida statistika...
  try {
    await knex.schema.createTable("tb_statistics", (table) => {
      table.increments("id_statistic");
      table.string("all_doctor").notNullable();
      table.string("daily_result").notNullable();
      table.string("annual_result").notNullable();
      table.string("annual_number_of_patients").notNullable();
      table
        .datetime("put_date")
        .notNullable()
        .defaultTo(knex.fn.now())
        .collate("utf8_unicode_ci");
    });
    console.log("tb_statistics muvoffaqiyatli yaratildi...");
  } catch (ex) {
    console.log("tb_statistics da xatolik : " + ex);
  }
}
// barcha jadvallarni bazada dynamic yaratish uchun f(x)...
createDataTables();
