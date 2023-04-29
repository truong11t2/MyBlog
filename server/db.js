import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    const uri = process.env.MONGO_URI;
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      //useNewUrlParse: false,
    });
    console.log(`MongoDb connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectToDb;
