import User from "../model/userModel.js";
import { accessToken } from "../utils/genereteToken.js";
import bcrypt from "bcryptjs";

// REGISTER USER
  //etape: coll filds user.body ,if user existe, hash password, creat password, save,Generate token, user Response,
export const register = async (req, res) => {
  try {
    const { FirstName, LastName, email, password, userRole } = req.body;
// Validation
    if (!FirstName || !LastName || !email || !password) {
      return res.status(400).json({ message: "Alle filds are requireded" });
    }
 // Check if user exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "user already existe" });
    }
//hash password
    const hashedPassword = await bcrypt.hash(password, 10);
//create new user
    const creatNewUser = new User({
      FirstName,
      LastName,
      email,
      password: hashedPassword,
      userRole,
    });
//save new user
    await creatNewUser.save()
//give him tocken for connecting
const tocken = accessToken(creatNewUser)

//response after successfuly registered
const userResponse={
      id: creatNewUser._id,
      FirstName: creatNewUser.FirstName,
      LastName: creatNewUser.LastName,
      email: creatNewUser.email,
      userRole: creatNewUser.userRole,
      creadedAt: creatNewUser.createdAt

}

//feedback of all if all is fine
res.status(201).json({message:"User created successfully", tocken:tocken, user:userResponse})



  } catch (error) {
    res.status(500).json({message: "error server", error:error.message})
  }
};


// LOGIN USER
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Generate token
    const token = accessToken(user);

    // User response
    const loggedInUser = {
      id: user._id,
      FirstName: user.FirstName,
      LastName: user.LastName,
      email: user.email,
      userRole: user.userRole,
    };

    return res.status(200).json({
      message: "Login successful",
      token,
      user: loggedInUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// import User from "../model/userModel.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv"

// dotenv.config()

// export const registerUser = async (req, res) => {
//   try {
//     const { userName, email, password } = req.body;

//     if (!userName || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     //hash pasword
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = new User({
//       userName,
//       email,
//       password: hashedPassword,
//     });

//     await user.save();
//     res.status(201).json({
//       message: "User created successfully",
//       data: {
//         userName: user.userName,
//         email: user.email,
//         id: user._id,
//         createdAt: user.createdAt,
//       },
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error creating use", error: error.message });
//   }
// };

// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         message: "All fields are required",
//       });
//     }
//     //SEARCH IN DATABASE
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "user not fund" });
//     }
//     //COMPAR PASSWORD
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         message: "invalide credential",
//       });
//     }
//     //CREAT TOCKEN
//     const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET , {
//       expiresIn: process.env.JW_EXPIRES_IN,
//     });

//     res.status(200).json({
//       message: "User connected successfuly",
//       token,
//       user: {
//         id: user._id,
//         userName: user.userName,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "error login user", error: error.message });
//   }
// };
