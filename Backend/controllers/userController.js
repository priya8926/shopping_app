const catchAsyncError = require("../middleware/catchAsyncError")
const ErrorHandler = require("../utils/errorhandler")
const User = require("../models/UserModel")
const setToken = require("../utils/jwtToken")
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto")
const Product = require("../models/ProductModel")

//register user
exports.registerUser = catchAsyncError(async (req, res) => {
    const { name, email, password } = req.body

    const user = await User.create({
        name, email, password,
        avatar: {
            public_id: "this is public_id of user",
            url: "avtarurl"
        }
    })
    setToken(user, 201, res)
})

// login user
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new ErrorHandler('Email and Password are required', 400))
    }
    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password ', 401))
    }

    const isPasswordMatched = await user.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password ', 401))
    }
    setToken(user, 200, res)
})

//logout user
exports.logoutUser = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        sucess: true,
        message: "Logged out"
    })
})

//get reset password token

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return next(new ErrorHandler('user not found', 404))
    }
    // get reset password token

    const resetTokenPromise = user.getResetPassToken()
    const resetToken = await resetTokenPromise;
    
    await user.save({ validateBeforeSave: false });

    //send it to user's email
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then ignore it `

    try {
        await sendEmail({
            
            email: user.email,
            subject: "Shopping app reset password",
            message,
        })
        res.status(200).json({ success: true, message: `Email sent to ${user.email} successfully` , resetPasswordUrl})
    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        await user.save({ validateBeforeSave: false });


        next(new ErrorHandler(error.message, 500))
    }
})

exports.resetPassword = catchAsyncError(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.tken).digest("hex")
    const user = await user.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }

    })
    if (!user) {
        return next(new ErrorHandler("Reset password token in expired or has been invalid", 400))
    }
    if (req.body.password !== req.body.confirPassword) {
        return next(new ErrorHandler("Password does not matched", 400))
    }
    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    user.save()
    setToken(user, 200, res)

})

// get user details
exports.getUserDetails = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.user.id);
    res.status(200).json({ success: true, user })
})

//update password  
exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password")

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword)

    if (!isPasswordMatched) {
        return next(new ErrorHandler("old password is incorrect", 400))
    }
    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("password does not match", 400))
    }

    user.password = req.body.newPassword;
    await user.save();
    setToken(user, 200, res)
})

// update user profile
exports.updateProfile = catchAsyncError(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }
    // avtar remain for later

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndMidify: false,
    })
    res.status(200).json({ success: true, msg: "profile updated successfully", user });
})

//get all user -- admin
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
    const users = await User.find()
    res.status(200).json({ success: true, users })
})

// get single user details -- admin
exports.getSingleUserDetail = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        return next(new ErrorHandler("User not found", 404))
    }
    res.status(200).json({
        success: true,
        user
    })
})
// update user role --admin
exports.updateUserRole = catchAsyncError(async (req, res, next) => {

    const users = await User.findById(req.user.id)
    if (!users) {
        return next(new ErrorHandler("user not found", 404))
    }

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndMidify: false,
    })
    res.status(200).json({ success: true });
})
// delete user --admin
exports.deleteUser = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return next(new ErrorHandler("user not found", 404))
    }
    await user.deleteOne()

    res.status(200).json({
        success: true,
        message: "User Deleted"
    });
})
