import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  pfp: { type: String, required: false},
  password: { type: String, required: true },
  level: { type: Number, required: true },
});

export default mongoose.model('User', UserSchema);