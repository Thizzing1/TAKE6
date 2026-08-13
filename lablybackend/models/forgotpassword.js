import mongoose from "mongoose";


const forgotpassword= new mongoose.Schema({
    otpHash:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    expiresAt:{
        type:Date,
        required:true,
        index:true
    }

});


export default mongoose.model("Forgotpassword",forgotpassword);