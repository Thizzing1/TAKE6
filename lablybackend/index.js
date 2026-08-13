import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
dotenv.config();
const db_url=process.env.databaseurl;
const app= express();
const port=3000;
import Loginroute from "./routes/Login.js";
import Signuproute from "./routes/signup.js";
import verifyidentity from "./routes/Identityverification.js";
import Forgotpassword from "./routes/ForgotPassword.js";
import otp from "./routes/otp.js";
mongoose.connect(db_url).then(()=>{
    console.log("Database Connected");
    app.listen(port,()=>{
        console.log("Server Running at port:",port);
    });
}).catch((err)=>{
    console.log("Error connecting to Databse");
});
app.use(express.json());
app.use(

  cors({

    origin: "http://localhost:5173", 

    methods: ["GET", "POST", "PUT", "DELETE"],

    credentials: true,

  })

);


app.use("/login",Loginroute);
app.use("/signup",Signuproute);
// app.use("/verify",verifyidentity);
app.use("/verifyemailaddress",otp);
app.use("/forgotpassword",Forgotpassword);



app.get("/",(req,res)=>{
   res.json({
    "message":"Api works"
   });

})
