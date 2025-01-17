const userModel = require("../models/index.model")


module.exports.indexcontroller = (req,res)=>{
    res.render("index")
}


module.exports.createController =  async (req,res)=>{

    
const {username, email, password} = req.query;

const newUser = new userModel({
   username:username,
   email:email,
   password:password
})

await newUser.save()

}
