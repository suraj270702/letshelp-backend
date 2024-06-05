

import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import userRoute from './routes/user.route.js'

const app = express()
dotenv.config()

//database connection
const db=async()=>{

    try{
        mongoose.set("strictQuery",false)
        await mongoose.connect(process.env.mongoose_url)
        console.log("Database Connection is Successful")
    }
    catch(err){
        console.log(err)
    }

}


//middleware
app.use(express.json())


//routes
app.use("/api",userRoute)


app.listen(8000,()=>{
    console.log("Server is running on port 8000")
    db()
})

