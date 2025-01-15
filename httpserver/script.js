// const http = require("http")

// const server = http.createServer((req,res)=>{

//     if(req.url === "/"){
//         res.end("Home page")
//     }else if(req.url === "/about"){
//         res.end("about page")
//     }else{
//         res.end("Page not found")
//     }
        
// })

// server.listen(3000)

const express = require("express");
const path = require("path");
const app = express();
app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("*",(req,res)=>{
        res.render("page")
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})



