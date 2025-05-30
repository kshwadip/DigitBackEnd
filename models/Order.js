import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    username: { type: String, required: true },
    orderId: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

orderSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2419200 });

const Order = mongoose.model("Order", orderSchema);
export default Order;
