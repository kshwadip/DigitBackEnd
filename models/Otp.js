import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    resetPassEmail: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 900 });

const Otp = mongoose.model("Otp", otpSchema);
export default Otp;
