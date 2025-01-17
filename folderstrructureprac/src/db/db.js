const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/kodr1")
.then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    age:Number
})

module.exports = mongoose.model("user",userSchema)
