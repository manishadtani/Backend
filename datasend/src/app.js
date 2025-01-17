const express = require("express")
const app = express()
app.set("view engine","ejs")
const indexRoute = require("./routers/index.router")
require("./db/db")



app.use("/", indexRoute)



module.exports = app;