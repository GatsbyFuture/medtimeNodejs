// mongodbga yozish uchun functionlar...
const {
    createPopular,
    createAds,
    createServices,
    createDoctor,
    createNews,
    createStatistics,
} = require("../models/createMongo_datas");
// controller class ochib olamiz va datani routerga uzatamiz...
class ControllerMongodb {
    async createPopularData(req, res) {
        try {
            const answer = await createPopular(req.body);
            if (answer.result) res.status(200).json(answer.data);
            else res.status(200).json(answer.data);
        } catch (err) {
            res.status(500).json('"createPopular" dan o\'qishda xatolik : ' + err);
        }
    }
    async createAdsData(req, res) {
        try {
            await createAds(req.body);
            res.status(200);
        } catch (err) {
            res.status(500).json('"createAds" dan o\'qishda xatolik : ' + err);
        }
    }
    async createServicesData(req, res) {
        try {
            await createServices(req.body);
            res.status(200);
        } catch (err) {
            res.status(500).json('" createServices" dan o\'qishda xatolik : ' + err);
        }
    }
    async createDoctorData(req, res) {
        try {
            await createDoctor(req.body);
            res.status(200);
        } catch (err) {
            res.status(500).json('"createDoctor" dan o\'qishda xatolik : ' + err);
        }
    }
    async createNewsData(req, res) {
        try {
            await createNews(req.body);
            res.status(200);
        } catch (err) {
            res.status(500).json('"createNews" dan o\'qishda xatolik : ' + err);
        }
    }
    async createStatisticsData(req, res) {
            try {
                await createStatistics(req.body);
                res.status(200);
            } catch (err) {
                res.status(500).json('"createStatistics" dan o\'qishda xatolik : ' + err);
            }
        }
        // yig'ilgan malumotlarni bitta json formatda chirqarib yuborish...
        // res.status(200).json({ result: "ok", data: objData });
}

module.exports = new ControllerMongodb();