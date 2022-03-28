const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Sachin:Sachin@cluster0.d57qd.mongodb.net/evl_3?retryWrites=true&w=majority"
  );
};

module.exports = connect;
