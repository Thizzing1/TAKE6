import dotenv from "dotenv";
import express from "express";
import { Resend } from "resend";
import crypto from "crypto";
import bcrypt from "bcrypt";
import Forgotpassword from "../models/forgotpassword.js";

const router = express.Router();
export default router;

dotenv.config();

const resend = new Resend(process.env.resendkey);

export function generateotp() {
  return crypto.randomInt(100000, 1000000);
}

const verifyotp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
      });
    }

    const verified = await Forgotpassword.findOne({
      email: email.trim().toLowerCase(),
      expiresAt: { $gt: new Date() }
    });

    if (!verified) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    if (!(await bcrypt.compare(String(otp), verified.otpHash))) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    req.verify = verified;
    await Forgotpassword.deleteOne({ _id: verified._id });
    next();
  } catch (e) {
    return res.status(500).json({
      message: "Error coming from verifyotp backend",
      error: e.message,
    });
  }
};

const resetpassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const otp = String(generateotp());

    const { data, error } = await resend.emails.send({
      from: "Lably <security@mylably.com>",
      to: email,
      subject: "Password Reset",
      html: `
        <h2>Welcome to Lably!</h2>

        <p>Your reset code is:</p>

        <h1 style="letter-spacing:5px">${otp}</h1>

        <p>This code expires in 10 minutes.</p>

        <p>If you didn't request this, you can ignore this email.</p>
      `,
    });

    if (error) {
      console.log(error);

      return res.status(500).json({
        message: "Backend Error coming from resetpassword",
        error: error.message,
      });
    }

    const newforgotuser = new Forgotpassword({
      otpHash: await bcrypt.hash(otp, 10),
      email: email.trim().toLowerCase(),
      expiresAt: new Date(Date.now() + 10 * 60 * 1000)
    });

    await newforgotuser.save();

    req.newdata = data;
    next();
  } catch (e) {
    console.log(e);

    return res.status(500).json({
      message: "Internal Server Error",
      error: e.message,
    });
  }
};

router.post("/", resetpassword, (req, res) => {
  return res.status(200).json({
    message: "Your OTP has been sent",
  });
});

router.post("/verify", verifyotp, (req, res) => {
  return res.status(200).json({
    message: "OTP has been verified",
  });
});