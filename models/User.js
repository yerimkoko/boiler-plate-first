const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //space없애줌
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 500,
  },
  role: {
    type: Number, //1이면 일반유저 0이면 관리자
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});
