import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import {
  generateRefreshToken,
  deleteOldRefreshTokens,
} from "../services/refreshTokenService.js";
import generateOtp from "../utils/otpGenerator.js";
import sendEmail from "../utils/emailService.js";
import Session from "../models/Session.js";
import User from "../models/User.js";
import Payment from "../models/Payment.js";
import Otp from "../models/Otp.js";

dotenv.config();

const registerUser = async ( username,phoneNumber,resetPassEmail,password ) => {

  const existingUser = await User.findOne({username});
  if (existingUser) return { type: "user" };

  const existingPhone = await User.findOne({phoneNumber});
  if (existingPhone) return { type: "phone" };

  const existingEmail = await User.findOne({resetPassEmail});
  if (existingEmail) return { type: "email" };
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      phoneNumber,
      resetPassEmail,
      password: hashedPassword,
    });
    await user.save();
    return true;
};

// const pay = await Payment.findOne({ userId: user._id });
//   if (!pay) return { type: "payment" };

const loginUser = async (usernameOrPhone, password, deviceId) => {
  const user = await User.findOne({
    $or: [{ username: usernameOrPhone }, { phoneNumber: usernameOrPhone }],
  });
  if (!user) return { type: "user" };

  //// payment

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { type: "password" };

  const existingSession = await Session.findOne({
    $or: [{ userId: user._id }, { deviceId: deviceId }],
  });
  if (existingSession) {
    await Session.deleteMany({
      $or: [{ userId: user._id }, { deviceId: deviceId }],
    });
  }
  const newSession = new Session({
    userId: user._id,
    usernameOrPhone,
    deviceId,
  });
  await newSession.save();
  await deleteOldRefreshTokens(user._id);

  const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const refreshToken = await generateRefreshToken(user._id, deviceId);

  return {
    accessToken,
    refreshToken,
  };
};

const resetPassword = async (resetPassEmail, otp, newPassword) => {
  const user = await User.findOne({ resetPassEmail });
  if (!user) return { type: "email" };

  const otpRecord = await Otp.findOne({ otp });
  if (!otpRecord) return { type: "otp" };

  const otpTimestamp = otpRecord.createdAt;
  const expirationTime = 15 * 60 * 1000;
  const currentTime = new Date().getTime();

  if (currentTime - otpTimestamp > expirationTime) {
    return { type: "otp_expired" };
  }

  if (otp !== otpRecord.otp) return { type: "otp" };

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();
  await Otp.deleteOne({ otp });
  return true;
};

const sendOtp = async (resetPassEmail) => {
  const otp = generateOtp();
  const deleteotp = Otp.findOne({ resetPassEmail });
  if (deleteotp) await Otp.deleteMany({ resetPassEmail });
  const otpRecord = new Otp({ resetPassEmail, otp });
  await otpRecord.save();

  try {
    await sendEmail(
      resetPassEmail,
      "Your OTP for password reset(Expires in 15 Minutes)",
      `Your OTP is: ${otp}`
    );
    return true;
  } catch (error) {
    return { type: "error" };
  }
};

const deleteUser = async (usernameOrPhone, password) => {
  const user = await User.findOne({
    $or: [{ username: usernameOrPhone }, { phoneNumber: usernameOrPhone }],
  });
  if (!user) return { type: "user" };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { type: "password" };

  await User.deleteOne({ _id: user._id });
  await Session.deleteMany({ userId: user._id });
  await deleteOldRefreshTokens(user._id);
  await Payment.deleteMany({ userId: user._id });
  return true;
};

const logoutUser = async (usernameOrPhone) => {
  try {
    const user = await User.findOne({
      $or: [{ username: usernameOrPhone }, { phoneNumber: usernameOrPhone }],
    });
    if (!user) return { type: "user" };
    await deleteOldRefreshTokens(user._id);
    const session = await Session.deleteOne({ userId: user._id });
    if (session) return true;
    return true;
  } catch (error) {
    console.error("Error during logout:", error);
    throw new Error("Logout failed");
  }
};

export {
  deleteUser,
  loginUser,
  registerUser,
  resetPassword,
  sendOtp,
  logoutUser,
};
