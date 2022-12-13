const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: "must have a name",
    },
    email: {
      type: String,
      required: "Must enter an email",
      unique: true,
    },
    password: {
      type: String,
      required: "You must enter a password",
    },
    teacher: {
      type: Boolean,
      required: "Pick teacher or student",
      default: false,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", UserSchema);
