import mongoose from 'mongoose';

const myUserSchema = new mongoose.Schema({
  user: Object,
});

mongoose.Promise = global.Promise;

const MyUserInfo = mongoose.model('MyUserInfo', myUserSchema);

export default MyUserInfo;
