// barcha malumotlarni olib sahifa birinchi yuklanganda yetkazish...
const knex = require("../db/connectdb");

async function popular_ads() {
    return await knex("tb_popular_ads")
        .select("picture_path", "title_text", "tag_text")
        .orderByRaw("RAND()")
        .limit(6);
}
async function ads() {
    return await knex("tb_ads")
        .select("id", "title_text", "tag_text", "money")
        .orderByRaw("RAND()")
        .limit(5);
}
async function services() {
    return await knex("tb_services")
        .select("name_service", "path_svg_service")
        .orderByRaw("RAND()")
        .limit(6);
}
async function doctors() {
    return await knex("tb_doctors")
        .select("type_of_treatment", "details")
        .orderByRaw("RAND()")
        .limit(5);
}
async function news() {
    return await knex("tb_news")
        .select("title_new_post", "details_new_post", "put_date")
        .orderByRaw("RAND()")
        .limit(5);
}
async function statistics() {
    return await knex("tb_statistics").select(
        "all_doctor",
        "daily_result",
        "annual_result",
        "annual_number_of_patients"
    );
}
module.exports = {
    popular_ads,
    ads,
    services,
    doctors,
    news,
    statistics,
};