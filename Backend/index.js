import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");       
    })
    }catch(error){console.log("MongoDB connection failed:", error);
    }
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
});