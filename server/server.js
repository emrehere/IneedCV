import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  

const app = express();
const port = process.env.PORT || 7000;


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const myUserSchema = new mongoose.Schema({
  user: Object,
});

const MyUserInfo = mongoose.model('MyUserInfo', myUserSchema);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);

  
});
