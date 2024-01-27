// const express = require("express")
// const app = express()
// const ejs = require("ejs")
// // const dotenv = require("dotenv")
// // dotenv.config();

// // app.set('view engine', 'ejs');
// // app.set('views', "public");
// // app.use(express.static("public"));

// app.get("/",(req,res)=>{

//     res.render("index.ejs")

// })

// module.exports = app;

// server.js 

const express = require("express"); 
const app = express(); 

// A simple get greet method 
app.get("/greet", (req, res) => { 
	// get the passed query 
	const { name } = req.query; 
	res.send({ msg: `Welcome ${name}!` }); 
}); 

// export the app for vercel serverless functions 
module.exports = app;
