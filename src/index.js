const app = require('./server')
const config = require("./config/config.js")
const connectDB = require("./db/connect")

connectDB().then(async function onServerInit(){
    console.log("Database connected");
    
    app.listen(config.app.PORT, ()=>{
        console.log("Server is running on PORT " + config.app.PORT);
    })
})
