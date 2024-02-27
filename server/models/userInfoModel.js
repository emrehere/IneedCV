import mongoose from 'mongoose';

const myUserSchema = new mongoose.Schema({
  user: Object,
  userId: {
    type: String,
    required: true
  }
});



const MyUserInfo = mongoose.model('MyUserInfo', myUserSchema);

export default MyUserInfo;
