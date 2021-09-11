// Barcha tablitsalar dynamic ochilishini taminlash...
const knex = require('./connectdb');

async function createDataTables() {
 console.log("Jadvallarni yaratish boshlandi...");
 try {
  await knex.schema.createTable('tb_popular_ads', (table) => {
   table.increments('id');
   table.string('picture_path');
   table.string('title_text').notNullable().defaultTo('new picture');
   table.string('tag_text');
   table.string('money').notNullable();
   table.datetime('put_date').notNullable()
    .defaultTo(knex.fn.now()).collate('utf8_unicode_ci');
  });
  console.log('tb_popular_ads muvoffaqiyatli yaratildi...');
 } catch (ex) {
  console.log('tb_popular_ads da xatolik : ' + ex);
 }
 try {
  await knex.schema.createTable('tb_analysis', (table) => {
   table.increments('id');
   table.string('brief_card').notNullable();
   table.string('text_option').notNullable();
   table.string('money').notNullable().defaultTo('for free');
   table.datetime('put_date').notNullable()
    .defaultTo(knex.fn.now()).collate('utf8_unicode_ci');
  });
  console.log('tb_analysis muvoffaqiyatli yaratildi...');
 } catch (ex) {
  console.log('tb_analysis da xatolik : ' + ex);
 }
 try {
  await knex.schema.createTable('tb_services', (table) => {
   table.increments('id');
   table.string('name_service').notNullable();
   table.string('path_svg_service').notNullable();
  });
  console.log('tb_services muvoffaqiyatli yaratildi...');
 } catch (ex) {
  console.log('tb_services da xatolik : ' + ex);
 }
 try {
  await knex.schema.createTable('tb_doctors', (table) => {
   table.increments('id_doctor');
   table.string('type_of_treatment').notNullable();
   table.string('details').notNullable();
   table.datetime('put_date').notNullable()
    .defaultTo(knex.fn.now()).collate('utf8_unicode_ci');
  });
  console.log('tb_doctors muvoffaqiyatli yaratildi...');
 } catch (ex) {
  console.log('tb_doctors da xatolik : ' + ex);
 }
 try {
  await knex.schema.createTable('tb_news', (table) =>{
   table.increments('id_new_post');
   table.string('title_new_post').notNullable();
   table.string('details_new_post').notNullable();
   table.datetime(knex.fn.now()).collate('utf8_unicode_ci');
  });
  console.log('tb_news muvoffaqiyatli yaratildi...');
 } catch (ex) {
  console.log('tb_news da xatolik : ' + ex);
 }try {
  await knex.schema.createTable('tb_statistics', (table) =>{
   table.increments('id_statistic');
   table.string('all_doctor').notNullable();
   table.string('daily_result').notNullable();
   table.string('annual_result').notNullable();
   table.string('annual_number_of_patients').notNullable();
   table.datetime(knex.fn.now()).collate('utf8_unicode_ci');
  });
  console.log('tb_statistics muvoffaqiyatli yaratildi...');
 } catch (ex) {
  console.log('tb_statistics da xatolik : ' + ex);
 }
}