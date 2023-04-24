const userRouter=require("express").Router()

const {signUp, checkUser} = require("../controllers/user.controller")

userRouter
.post("/signup", signUp)
.post("/check", checkUser)

module.exports = userRouter