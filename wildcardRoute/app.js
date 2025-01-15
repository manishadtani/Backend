const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname,"public")))

let data1 = 20;
let data2 = "Adtani";
let data = [
    {
            name:"manish",
            mail:"man@gmail.com",
            num:30
    },
    {
        name:"Adtani",
        mail:"Adtani@gmail.com",
        num:40
}
]

app.get("/",(req,res)=>{
    res.render("index",{data:data})
})



app.get("*",(req,res)=>{
    res.render("error")
})



app.set("view engine","ejs")
app.listen(3000,(()=>{
    console.log("server is running")
}))