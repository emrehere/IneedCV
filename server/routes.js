import { Router } from "express";
import mongoose from "mongoose";
import MyUserInfo from "./userInfoModel.js";


const router = Router();


router.get("/mycv", async (req, res) => {
    
    try {
        const myUserInfo = await MyUserInfo.find();
        res.json(myUserInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

})



// POST endpoint
router.post("/templates", async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    
    const { id,name, title, email, city, phone, image, skills, skillsInfo, languages, languagesInfo, profile, profileInfo, projects, projectsInfo, education, educationInfo, save } = req.body;

    const user = { id,name, title, email, city, phone, image, skills, skillsInfo, languages, languagesInfo, profile, profileInfo, projects, projectsInfo, education, educationInfo, save };
    

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






async function updateCV(userId, updatedData) {
  try {
    // Validate if userId is a valid ObjectId
    
    const { ObjectId } = mongoose.Types;

    if (!ObjectId.isValid(userId)) {
      console.error(`Invalid ObjectId: ${userId}`);
      throw new Error("Invalid ObjectId");
    }

    console.log("Received beforeresult:", updatedData);


    const result = await MyUserInfo.findByIdAndUpdate(
      userId,
      { $set: { user: updatedData } },
      { new: true }
    );
    

    console.log("Received afterresult:", result);

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


router.put('/update/:userId', async (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;

 

  try {
    const result = await updateCV(userId, updatedData);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});




export default router;
