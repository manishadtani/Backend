const express = require("express")
const app = express()
const path = require ("path")
app.use(express.urlencoded({extended:false}))
// app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/create",(req,res)=>{
    console.log(req.body)
    res.send("data created")
})


app.set("view engine","ejs")
app.listen(3000)