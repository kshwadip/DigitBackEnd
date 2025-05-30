import { createHmac } from "crypto";
import express from "express";
import Razorpay from "razorpay";
import User from "../models/User.js";
import Payment from "../models/Payment.js";
import Order from "../models/Order.js";
import dotenv from "dotenv";
// import bodyParser from "body-parser";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
dotenv.config();
const razorpay = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});


const router = express.Router();
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));


router.post("/Createorder", async (req, res) => {
  try {
    const { usernameOrPhone, amount } = req.body;
    const user = await User.findOne({ phoneNumber: usernameOrPhone });
    if (!user) return res.status(400).json("User Not Found");

    const options = {
      amount: amount * 100,
      currency: "INR",
    };
    const order = await razorpay.orders.create(options);
    const createOrder = await Order.findOne({ userId: user._id });
    if (createOrder) await Order.deleteOne({ userId: user._id });

    const newOrder = new Order({
      userId: user._id,
      username: user.username,
      orderId: order.id,
      amount: options.amount / 100,
      currency: options.currency,
    });
    await newOrder.save();
    res.status(200).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating order", error: error.message });
  }
});

function validateWebhookSignature(body, razorpay_signature, secret) {
  const generatedSignature = createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  return generatedSignature === razorpay_signature;
}

router.post("/Verifyorder", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature);
  try {
    const user = await Order.findOne({ orderId: razorpay_order_id });

    if (!user || !user.userId) {
      console.log(user.userId);
      return res.status(400).json({ status: "Invalid order or user ID" });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const secret = razorpay.key_secret;
    const isValidSignature = validateWebhookSignature(
      body,
      razorpay_signature,
      secret
    );

    if (isValidSignature) {
      const newPayment = new Payment({
        userId: user.userId,
        username: user.username,
        orderId: razorpay_order_id,
        remainingDays: 30,
        amount: user.amount,
        currency: user.currency,
        paymentId: razorpay_payment_id,
      });

      if (!newPayment.userId) {
        return res
          .status(400)
          .json({ status: "Invalid user ID in new payment" });
      }

      const expirationDate = new Date();
      expirationDate.setSeconds(
        expirationDate.getSeconds() + newPayment.remainingDays * 86400
      );
      newPayment.expirationDate = expirationDate;
      const existingPayment = await Payment.findOne({ userId: user.userId });

      if (existingPayment) {
        existingPayment.orderId = newPayment.orderId;
        existingPayment.remainingDays += newPayment.remainingDays;
        existingPayment.amount += newPayment.amount;
        existingPayment.paymentId = newPayment.paymentId;
        existingPayment.expirationDate = expirationDate;
        await existingPayment.save();
      } else {
        await newPayment.save();
      }
      await Order.deleteOne({ userId: user.userId });
      res.status(200).json({ status: "ok" });
    } else {
      res.status(400).json({ status: "verification_failed" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Error verifying payment" });
  }
});

export default router;

