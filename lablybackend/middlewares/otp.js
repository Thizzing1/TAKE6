import dotenv from "dotenv";
import Otpmodel from "../models/otpmodel.js";
import Users from "../models/signup.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

dotenv.config();


/*
|--------------------------------------------------------------------------
| GENERATE OTP
|--------------------------------------------------------------------------
*/

export function generateotp() {

  const otp =
    crypto.randomInt(
      100000,
      1000000
    );

  return otp;

}


/*
|--------------------------------------------------------------------------
| VERIFY OTP
|--------------------------------------------------------------------------
*/

export default async function VerifyOTP(
  req,
  res,
  next
) {

  try {

    const {
      email,
      otp
    } = req.body;


    /*
    |--------------------------------------------------------------------------
    | REQUIRED FIELDS
    |--------------------------------------------------------------------------
    */

    if (
      !email ||
      !otp
    ) {

      return res.status(400).json({

        message:
          "Email and OTP are required"

      });

    }


    const normalizedEmail =
      email
        .trim()
        .toLowerCase();


    /*
    |--------------------------------------------------------------------------
    | FIND VALID OTP
    |--------------------------------------------------------------------------
    */

    const otpRecord =
      await Otpmodel.findOne({

        email:
          normalizedEmail,

        expiresAt: {
          $gt:
            new Date()
        }

      });


    if (!otpRecord) {

      return res.status(400).json({

        message:
          "Invalid or expired OTP"

      });

    }


    /*
    |--------------------------------------------------------------------------
    | CHECK OTP
    |--------------------------------------------------------------------------
    */

    const validOtp =
      await bcrypt.compare(

        String(otp),

        otpRecord.otpHash

      );


    if (!validOtp) {

      return res.status(400).json({

        message:
          "Invalid OTP"

      });

    }


    /*
    |--------------------------------------------------------------------------
    | FIND USER
    |--------------------------------------------------------------------------
    */

    const user =
      await Users.findOne({

        email:
          normalizedEmail

      });


    if (!user) {

      return res.status(404).json({

        message:
          "User not found"

      });

    }


    /*
    |--------------------------------------------------------------------------
    | MARK LABLY ACCOUNT VERIFIED
    |--------------------------------------------------------------------------
    */

    user.emailVerified =
      true;


    await user.save();


    /*
    |--------------------------------------------------------------------------
    | DELETE USED OTP
    |--------------------------------------------------------------------------
    */

    await Otpmodel.deleteOne({

      _id:
        otpRecord._id

    });


    /*
    |--------------------------------------------------------------------------
    | PASS USER TO ROUTE
    |--------------------------------------------------------------------------
    */

    req.user =
      user;


    return next();


  } catch (error) {

    console.error(
      "OTP VERIFICATION ERROR:",
      error
    );


    return res.status(500).json({

      message:
        `Error coming from VerifyOTP backend: ${error.message}`

    });

  }

}