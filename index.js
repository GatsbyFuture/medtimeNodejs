// Asosiy packegelardan obj olamiz...
const express = require("express");
const path = require("path");
require("dotenv").config({ path: "./environment/.env" });
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
// middlewarega jo'natamiz...
require("./midllewares/startup")(app);

// portga ulanamiz va tekshirib ko'ramiz...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`${port} - portga uladik...`);
});