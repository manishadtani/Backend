const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/kodr2")
.then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

module.exports = mongoose