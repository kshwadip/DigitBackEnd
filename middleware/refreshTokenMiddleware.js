import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { RefreshToken } from "../models/RefreshToken.js";

dotenv.config();

const refreshTokenMiddleware = async (req, res, next) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token is required" });
  }
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const storedRefreshToken = await RefreshToken.findOne({
      userId: decoded.userId,
      token: refreshToken,
    });

    if (!storedRefreshToken) {
      throw new Error("Invalid or expired refresh token");
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Invalid or expired refresh token" });
  }
};

export default refreshTokenMiddleware;
