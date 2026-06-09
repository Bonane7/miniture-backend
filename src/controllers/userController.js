import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


export const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //hash pasword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      userName,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({
      message: "User created successfully",
      data: {
        userName: user.userName,
        email: user.email,
        id: user._id,
        createdAt : user.createdAt
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating use", error: error.message });
  }
};

export const loginUser = async (req, res)=>{
    try {
        const {email, password}=req.body

        if(!email || !password){
          return  res.status(400).json({
                message:"All fields are required"
            })
        }
            //SEARC IN DATABASE
        const user = await User.findOne({email})
        if(!user){
          return res.status(400).json({message:"user not fund"})
        }
            //COMPAR PASSWORD
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({
                message: "invalide credential"
            })
        }
                    //CREAT TOCKEN
        const token = jwt.sign({id: user._id, email: user.email}, "SECRET_KEY", {expireIn:"1d"})
        
        
    } catch (error) {
        
    }
}