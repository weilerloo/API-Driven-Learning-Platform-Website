const User = require('../models/user')
const Course = require("../models/course");
const CourseProgress = require("../models/courseProgress");
const { courseEnrollmentEmail } = require("../mail/templates/courseEnrollmentEmail");

// Top up wallet
exports.topUpWallet = async (req, res) => {
  try {
    const { amount } = req.body
    const userId = req.user.id

    if (!amount || amount <= 0) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid amount' })
    }

    const user = await User.findById(userId)
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' })
    }

    user.wallet += amount
    await user.save()

    return res.status(200).json({
      success: true,
      message: 'Wallet topped up successfully',
      wallet: user.wallet,
    })
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

// Deduct wallet for course enrollment
exports.enrollWithWallet = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;

    // Validate user
    const user = await User.findById(userId);
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    // Validate course
    const course = await Course.findById(courseId);
    if (!course)
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });

    // Check wallet balance
    if (user.wallet < course.price) {
      return res
        .status(400)
        .json({ success: false, message: "Insufficient balance" });
    }

    // Deduct wallet balance
    user.wallet -= course.price;

    // --- Enroll Student into Course ---
    course.studentsEnrolled.push(userId);
    await course.save();

    // Create course progress (start with 0 videos completed)
    const courseProgress = await CourseProgress.create({
      courseID: courseId,
      userId: userId,
      completedVideos: [],
    });

    // Add course + progress to student
    user.courses.push(courseId);
    user.courseProgress.push(courseProgress._id);
    await user.save();
    
    // Respond to client
    return res.status(200).json({
      success: true,
      message: `Enrolled in ${course.courseName} using wallet`,
      wallet: user.wallet,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

exports.getWalletBalance = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("wallet");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      wallet: user.wallet,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};