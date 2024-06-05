import userModel from "../models/user.model.js"
import bcrypt from 'bcrypt'

export const createUser=async(req,res)=>{
    try{

        const {password,...data} = req.body

        const hashPassword= await bcrypt.hash(password,15)

        const user = new userModel({...data,password:hashPassword})

        await user.save()

        return res.status(200).json({message:"User Created Successfully"})

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal Server Error"})
    }
}