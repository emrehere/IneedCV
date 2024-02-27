import mongoose from "mongoose";
import MyUserInfo from '../models/userInfoModel.js';

async function getMyCV(req, res) {
  console.log("Fetching data from MongoDB...");

  try {
    const userId = req.user._id;
    console.log("userId", userId);
    const userData = await MyUserInfo.findOne({ userId });

    console.log("userData", userData);

    if (userData) {
      res.status(200).json([{ user: userData }]);
    } else {
      res.status(404).json({ error: 'User data not found' });
    }
  } catch (error) {
    console.error('Error during fetch user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createTemplate(req, res) {

  console.log("req.user", req.user)
  const userId = req.user._id;
  console.log("createTemplate", userId);
 
  try {
 

    const { name, title, email, city, phone, image, skills, skillsInfo, languages, languagesInfo, profile, profileInfo, projects, projectsInfo, education, educationInfo, save } = req.body;
   
    const user = { name, title, email, city, phone, image, skills, skillsInfo, languages, languagesInfo, profile, profileInfo, projects, projectsInfo, education, educationInfo, save };
 
    console.log("Saving data to MongoDB...", user);
    const myUserInfoInstance = new MyUserInfo({ user, userId });
    await myUserInfoInstance.save();
    

    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateCV(userId, updatedData) {
  try {
    
    const filter = { userId: userId };

    const result = await MyUserInfo.findOneAndUpdate(
      filter,
      { $set: { user: updatedData } },
      { new: true }
    );

    if (!result) {
      console.error(`User with ID ${userId} not found`);
      throw new Error("User not found");
    }

    console.log("CV updated successfully");

    return { message: "CV updated successfully" };
  } catch (error) {
    console.error("Error updating CV:", error.message);
    throw error;
  }
}

async function deleteCV(userId) {
  try {
    const result = await MyUserInfo.findByIdAndDelete(userId);
    if (!result) {
      console.error(`User with ID ${userId} not found`);
      throw new Error("User not found");
    }
    console.log("CV deleted successfully");
    return { message: "CV deleted successfully" };
  } catch (error) {
    console.error("Error deleting CV:", error.message);
    throw error;
  }
}

export { getMyCV, createTemplate, updateCV, deleteCV };
