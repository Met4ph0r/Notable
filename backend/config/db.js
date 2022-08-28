//Connection file to mongo db
import mongoose from "mongoose";
import color from "colors";

const connectDB = async () => {
  try {
    const URI = process.env.MONGO_URI || "mongodb+srv://meta:meta1234@atlascluster.d3t6kge.mongodb.net/?retryWrites=true&w=majority";
    const conn = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

export default connectDB;
