import mongoose from 'mongoose';

const myUserSchema = new mongoose.Schema({
  user: Object,
});



const MyUserInfo = mongoose.model('MyUserInfo', myUserSchema);

export default MyUserInfo;
