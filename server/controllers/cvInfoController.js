import mongoose from "mongoose";
import MyUserInfo from '../models/userInfoModel.js';

async function getMyCV(req, res) {
  console.log("Fetching data from MongoDB...");
  try {
    const myUserInfo = await MyUserInfo.find();
    res.json(myUserInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createTemplate(req, res) {

  

  try {

  

    const { name, title, email, city, phone, image, skills, skillsInfo, languages, languagesInfo, profile, profileInfo, projects, projectsInfo, education, educationInfo, save } = req.body;
   
    const user = { name, title, email, city, phone, image, skills, skillsInfo, languages, languagesInfo, profile, profileInfo, projects, projectsInfo, education, educationInfo, save };
 
    console.log("Saving data to MongoDB...", user);
    const myUserInfoInstance = new MyUserInfo({ user});
    await myUserInfoInstance.save();
    

    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateCV(userId, updatedData) {
  try {
    const { ObjectId } = mongoose.Types;

    if (!ObjectId.isValid(userId)) {
      console.error(`Invalid ObjectId: ${userId}`);
      throw new Error("Invalid ObjectId");
    }

    const result = await MyUserInfo.findByIdAndUpdate(
      userId,
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
