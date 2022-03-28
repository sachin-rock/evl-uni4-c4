const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: { typ: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
userSchema.pre("save", function (next) {
  const hash = bcrypt.hash(this.password, 8);
  this.password = hash;
  return next();
});

module.exports = mongoose.model("user", userSchema);
