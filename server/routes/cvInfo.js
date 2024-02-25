import express from "express";
import {
  getMyCV,
  createTemplate,
  updateCV,
  deleteCV,
} from '../controllers/cvInfoController.js';
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.use(requireAuth);

router.get("/mycv", getMyCV);

router.post("/templates", createTemplate);

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

router.delete('/delete/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await deleteCV(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
