import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/ChatApp");
    console.log("Connected to DB");
  } catch (e) {
    console.log("Error connecting to DB:", e);
  }
};
