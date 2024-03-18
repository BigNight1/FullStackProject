import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://OneMid76:123@fullstack.a2k0jbf.mongodb.net/");
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};
