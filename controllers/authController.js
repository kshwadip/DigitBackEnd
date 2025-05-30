import { registerUser, loginUser, resetPassword as resetPasswordService, sendOtp, deleteUser, logoutUser} from "../services/authService.js";

const register = async (req, res) => {
  try {
    const { username, phoneNumber, resetPassEmail, password } = req.body;
    const user = await registerUser(username, phoneNumber,resetPassEmail, password);

    if (user.type === "user") {
      res.status(400).json({ message: `User with this name ${username} Already Exists` });
    } else if (user.type === "phone") {
      res.status(400).json({ message: `User with this number ${phoneNumber} Already Exists` });
    } else if(user.type === 'email'){
      res.status(400).json({ message: `User with this email ${resetPassEmail} Already Exists` });
    }else {
      res.status(200).json(user);
    }

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { usernameOrPhone, password, deviceId } = req.body;
    const user = await loginUser(usernameOrPhone, password, deviceId);
    if (user.type === "user") {
      res.status(400).json({ message: `Incorrect Username OR username doesn't exist , Register an account` });
    } else if (user.type === "password") {
      res.status(400).json({ message: "Incorrect Password" });
    } else if(user.type === 'payment'){
      res.status(400).json({ message: "Recharge your Account" });
    }else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { resetPassEmail , otp, newPassword } = req.body;
    const user = await resetPasswordService(resetPassEmail , otp, newPassword);

    if (user.type === "email") {
      res.status(400).json({ message: "Incorrect Email" });
    } else if (user.type === "otp") {
      res.status(400).json({ message: "Incorrect otp" });
    }else {
      res.status(200).json({ message: "Password has been changed" })
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const sendOP = async(req, res) => {
  try {
    const { resetPassEmail } = req.body;
    const user = await sendOtp(resetPassEmail);
    if (user.type === "error") {
      res.status(400).json({ message: "Error occured while sending otp" });
    }else {
      res.status(200).json({ message: "OTP has been sent" })
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const { usernameOrPhone, password } = req.body;
    const user = await deleteUser(usernameOrPhone, password);

    if (user.type === "user") {
      res.status(400).json({ message: `Account doesn't exist` });
    } else if (user.type === "password") {
      res.status(400).json({ message: "Incorrect Password" });
    } else {
      res.status(200).json({ message: "Account Deleted" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const logout = async (req, res) => {
  try {
    const { usernameOrPhone } = req.body; 
    const result = await logoutUser(usernameOrPhone);
    if (result.type === "user") {
      res.status(400).json({ message:"No user found"})    
    } else if (result == true) {
      res.status(200);
    } else {
      res.status(200);
    }
  } catch (error) {
    res.status(500).json({ message: "Error during logout", error: error.message });
  }
};

export { register, login, resetPassword, sendOP, deleteAccount, logout };
