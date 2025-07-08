import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGODB CONNECTED SUCCESSFULLY : ${conn.connection.host}`);
  } catch (error) {
    console.log("connection falied ", error);
    process.exit(1);
  }
};
