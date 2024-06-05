import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    password:{
       type:String,
       required:true
    },
    mobile_no:{
        type:Number,
        required:true,
        unique:true,
        match: [/^\d{10}$/, 'Please fill a valid mobile number'],
    },
    role:{
        type:String,
        required:true,
        default:"user",
        enum:["admin","user","ngo"]
    },
    verified:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true})

export default mongoose.model("User",userSchema)