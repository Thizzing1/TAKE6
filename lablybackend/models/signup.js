import mongoose from "mongoose";

const signupschema =
  new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },

      supabaseUserId: {
        type: String,
        unique: true,
        sparse: true,
      },

      emailVerified: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Users",
  signupschema
);