const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log("connected to mongo")
});

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});





