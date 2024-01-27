const express = require("express")
const app = express()
const ejs = require("ejs")
const dotenv = require("dotenv")
dotenv.config();

app.set('view engine', 'ejs');
app.set('views', "public");
app.use(express.static("public"));

app.get("/",(req,res)=>{

    res.render("index.ejs")

})

module.exports = app;