const express = require("express");
const app = express();
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
// let fetch = require('node-fetch')
const bcrypt = require("bcrypt");
// const User = require("./models/Users");
let MongoStore = require("connect-mongo")(session);
require("dotenv").config();
const peopleList = require('./models/Users')
const displayMovie = require('./models/movies')
const port = process.env.PORT || 8000;

mongoose
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log("MongoDB Connected");
})
.catch(err => console.log(`Mongodb Error: ${err}`));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(logger("dev"));
app.use(cookieParser());


app.get("/random", (req, res) => {
    res.render("main/random", {peopleList}  );
});


app.get("/movies", (req, res) => {
    res.render("main/movies", {displayMovie});
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});