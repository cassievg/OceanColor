import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  pfp: { type: String, required: false},
  password: { type: String, required: true },
  level: { type: Number, required: true },
  approved: { type: Number, required: false, deafult: 0 },
  disapproved: { type: Number, required: false, deafult: 0  },
  waiting: { type: Number, required: false, deafult: 0  },
  progress: { type: Number, required: false, deafult: 0  },
});

export default mongoose.model('User', UserSchema);