import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true},
    usernameOrPhone: { type: String, required: true, unique: true },
    deviceId: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

sessionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2419200 });

const Session = mongoose.model("Session", sessionSchema);
export default Session;
