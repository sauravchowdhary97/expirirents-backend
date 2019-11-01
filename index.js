const conection = require("./model");

const express = require("express");
const application = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const UserController = require("./controller/cont")

application.use(bodyParser.urlencoded({
    extended : true
}));

application.engine("hbs", expressHandlebars ({
    extname : "hbs", 
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

application.set("view engine", "hbs")

application.set('views',path.join(__dirname,"/views/"));

application.get("/", (req, res)=>{
    // res.send('<h1>Hello Saurav<h1>')
    res.render("index", {})
});

application.use("/user", UserController)

application.listen("3000", ()=>{
    console.log("Server started!");
});
