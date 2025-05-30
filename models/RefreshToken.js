import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: { type: String, required: true },
    deviceId: { type: String, required: true },
  },
  { timestamps: true }
);

refreshTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2419200 });

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

export { RefreshToken };
