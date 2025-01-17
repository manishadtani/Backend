const userModel = require("../models/user.model")



module.exports.indexController = (req,res)=>{
    res.send("hello")
}

module.exports.registerController = async (req,res)=>{
    console.log(req.query)
    const {username,email,password} = req.query

    const newUser = new userModel({
        username,
        email,
        password
    })
            await newUser.save()
            res.send(newUser)
}


module.exports.getAllusers = async (req,res)=>{
   const users = await userModel.find({
        username:"mannnnnnnnnnndsdhhdh"
    })
    console.log(users)
    res.send(users)
}

module.exports.getupdateusers = async (req,res)=>{
       await userModel.findOneAndUpdate({
        username : "Manish adtani",
       },{
        password : "2222"
       })


}

module.exports.DeleteUsers = async (req,res)=>{
    await userModel.findOneAndDelete({
     username : "Manish adtani",
    })
}