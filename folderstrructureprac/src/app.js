const express = require("express")
const app = express()
const indexRouter = require("./routes/index.routes")
const userRouter = require("./routes/user.routes")
const globalRouter = require("./routes/global.routes")
app.set("view engine","ejs")
app.use("views","./src/views")
app.use("/", indexRouter);

app.use("/user", userRouter)

app.use("*", globalRouter)

module.exports = app;