const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const reportRoute = require("./routes/report")

const app = express()
app.use(express.json())
app.use(cors({
    origin:process.env.ORIGIN
}))


app.use("/",reportRoute)

  async function callDB () {
    try{
        mongoose.connect(process.env.DATABASE_URL)
        app.listen(process.env.PORT,()=> {
            console.log("server is ready to take off");
            
        })

    }catch(err){
        console.log(err);
        
    }

  }
  callDB()
