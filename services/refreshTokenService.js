import jwt from "jsonwebtoken";
import { RefreshToken } from "../models/RefreshToken.js";
import dotenv from "dotenv";

dotenv.config();

const generateRefreshToken = async (userId,deviceId) => {
  const refreshToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  });

  const newRefreshToken = new RefreshToken({ userId, token: refreshToken,deviceId });
  await newRefreshToken.save();

  return refreshToken; 
};

const verifyRefreshToken = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

    const storedRefreshToken = await RefreshToken.findOne({
      userId: decoded.userId,
      token: refreshToken,
    });

    if (!storedRefreshToken) {
      throw new Error("Invalid or expired refresh token");
    }

    return decoded;
  } catch (err) {
    throw new Error("Invalid or expired refresh token");
  }
};

const deleteOldRefreshTokens = async (userId) => {
  try {
    await RefreshToken.deleteMany({ userId });
  } catch (error) {
    console.error("Error deleting old refresh tokens:", error);
  }
};

export { generateRefreshToken, verifyRefreshToken,deleteOldRefreshTokens };
