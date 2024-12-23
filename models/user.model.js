import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [3, "username must be at least 3 charc long"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [10, "email must be at least 10 charc long"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, "password must be at least 5 charc long"],
  },
});

const user = mongoose.model("user", userSchema);

export default user;
