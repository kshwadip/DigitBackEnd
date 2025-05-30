import Session from "../models/Session.js";
import Payment from "../models/Payment.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

 const  protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Not authorized' });
  
  try {
    
    {
      const deviceToken = req.headers["device-token"];
      const device = await Session.findOne({ deviceId: deviceToken });
      if (device == null) return res.status(401).json({ message: "Login With This Device" });
      // const pay = await Payment.findOne({ userId: device.userId });
      // if (!pay) return { type: "payment" };
      if (deviceToken !== device.deviceId) return res.status(401).json({ message: "Login With This Device" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Not authorized' });
  }
};

export default protect;
