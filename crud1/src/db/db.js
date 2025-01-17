const mongoose = require("mongoose")



const connect = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/cruddata")
    .then(()=>{
        console.log("database is running");
    })
    .catch((err)=>{
            console.log(err)
    })
}


module.exports = connect;