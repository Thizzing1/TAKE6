import express from "express";
import sendotp from "../middlewares/otp.js";
import VerifyOTP from "../middlewares/otp.js";

const router=express.Router();
export default router;

// router.post("/",sendotp,(req,res)=>{
//     const userdata=req.data;
//     if(userdata){
//          return res.status(200).json({message:"OTP generated check Email"});
//     }
// });


router.post("/",VerifyOTP,(req,res)=>{
    const usermail=req.user;
    if(usermail){
        return res.status(201).json({message:"OTP verified"});
    }
});
