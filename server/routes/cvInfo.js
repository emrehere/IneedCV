import express from "express";
import {
  getMyCV,
  createTemplate,
  updateCV,
  deleteCV,
} from '../controllers/cvInfoController.js';
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();



router.get("/mycv", requireAuth, getMyCV);

router.post("/templates", requireAuth, createTemplate);

router.put('/update/:userId', requireAuth, async (req, res) => {
  const userId = req.params.userId;
  console.log("userId from update routes", userId);
  const updatedData = req.body;
  console.log("updatedData from update routes", updatedData);

  try {
    const result = await updateCV(userId, updatedData);
    res.status(200).json(result);
    console.log("result from update routes", result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete('/delete/:userId', requireAuth, async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await deleteCV(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
