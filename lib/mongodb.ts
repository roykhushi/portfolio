import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch (error) {
        console.error(`error in db ${error}`);
    }
}