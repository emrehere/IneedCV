import { Router } from "express";
import mongoose from "mongoose";
import MyUserInfo from "./userInfoModel.js";

const router = Router();




// POST endpoint
router.post("/templates", async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    
    const { name, title, email, city, phone, image, skills, skillsInfo, languages, languagesInfo, profile, profileInfo, projects, projectsInfo, education, educationInfo, save } = req.body;

    const user = { name, title, email, city, phone, image, skills, skillsInfo, languages, languagesInfo, profile, profileInfo, projects, projectsInfo, education, educationInfo, save };
    

    // Save the "user" data to the database using Mongoose
    const myUserInfoInstance = new MyUserInfo({ user });
    await myUserInfoInstance.save();

    // Send a success response
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    // Send an error response
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
