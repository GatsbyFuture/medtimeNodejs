// midlleware ga kerakli packagelarni o'rnatamiz...
const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
// const morgan = require("morgan");
var cors = require("cors");
const path = require("path");
const readRouter = require("../routers/router_data");

// export qilib qo'yamiz use f(x)larini...
module.exports = function(app) {
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "public")));
    // qaysi muhitda ishlayotganini bilish uchun...
    // if (app.get("env") == "development") {
    //   app.use(morgan("tiny"));
    //   console.log("dastur devlopment muhitida ishlayapti...");
    // }
    app.use(cors());
    app.use(helmet());
    app.use(compression());
    // login pagega kirish uchun
    app.use("/", readRouter);
    // user uchun asosiy CRUD ishlari...
    app.use("/data", readRouter);
};