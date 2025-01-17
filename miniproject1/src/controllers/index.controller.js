const { name } = require("ejs");
const userModel = require("../models/userModel");


module.exports.indexController = (req,res)=>{
    res.render("index")
}


module.exports.registerController = async (req,res)=>{
    console.log(req.body)
    const {user, username, email, age, password} = req.body
    const newUser = new userModel({
        username:username,
        name:name,
        age:age,
        email:email,
        password:password
    })

   await newUser.save()
    res.render("register")
}