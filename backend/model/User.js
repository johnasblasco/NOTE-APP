// model/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 }
});

//wag na timestop para linis tignan api natin pangit eh next time nalng

const User = mongoose.model('User', userSchema);
export default User; 
