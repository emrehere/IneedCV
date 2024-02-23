import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import cors from 'cors';
import userInfoRoutes from './routes/cvInfo.js';
import usersRoutes from './routes/users.js';



dotenv.config();  

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());

app.use('/', userInfoRoutes);
app.use('/api', usersRoutes);


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});




app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);

  
});
