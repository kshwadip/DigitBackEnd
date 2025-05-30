import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    username: { type: String, required: true },
    orderId: { type: String, required: true },
    remainingDays: { type: Number, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    paymentId: { type: String, required: true },
    expirationDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

paymentSchema.pre("save", function (next) {
  if (this.remainingDays) {
    const expirationDate = new Date();
    expirationDate.setSeconds(
      expirationDate.getSeconds() + this.remainingDays * 86400
    );
    this.expirationDate = expirationDate;
  } else {
    this.expirationDate = new Date();
  }

  if (!this.userId) {
    const error = new Error("User ID is required");
    return next(error);
  }

  next();
});

paymentSchema.index({ expirationDate: 1 }, { expireAfterSeconds: 0 });

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
