const express = require("express")
const app = express()
const ejs = require("ejs")


app.set('view engine', 'ejs');
app.set('views', "public");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    
    res.render("index.ejs")

})

app.listen(3000,()=>{console.log("listening 3000");})