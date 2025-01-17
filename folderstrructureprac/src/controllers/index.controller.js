const DriverModel = require("../db/db")


module.exports.index=(req,res)=>{
    res.render('index')
}


module.exports.homeController = (req,res)=>{
    res.render("index");

    const newdriver = DriverModel.create({
        username:username,
        email:email,
        password:password
    }) 
}

module.exports.aboutController = (req,res)=>{
    res.send("about page");
}




