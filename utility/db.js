const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

// const URI = "mongodb://127.0.0.1:27017/admin";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("coneection successfully to DB");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
