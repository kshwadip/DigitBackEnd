import express from "express";
import { register,login,resetPassword,sendOP,deleteAccount,logout} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/reset-password", resetPassword);
router.post("/otp", sendOP);
router.post("/delete-account", deleteAccount);
router.post("/logout", logout);

export default router;
