import mongoose from "mongoose";

import { MONGODB_URI } from "../config/env.js";
if(!MONGODB_URI){
    throw new Error('Please define the MONGODB_URI environment variable');
}

const connectDB = async() => {
    try{
        await mongoose.connect(MONGODB_URI, {
            appName : "devrel.vercel.integration",
            maxIdleTimeMS : 10000
        });
        
        console.log("Connected to database!");
    }
    catch(error){
        console.log("Error connecting to database ", error);
    }
}

export default connectDB;