import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.router.js"
import reviewRoute from "./route/review.route.js"
import contactRoute from "./route/contact.route.js"; // Correct import


const app = express();
const PORT = process.env.PORT || 3000;
import fileUpload from 'express-fileupload'; // Import express-fileupload


// Middleware
app.use(cors()); // Optionally configure CORS with more control if needed
app.use(express.json({ limit: '50mb' })); // Parse incoming JSON requests, limit size to handle large files
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // Parse URL-encoded data
app.use(fileUpload()); // Middleware for handling file uploads


// connect to mongoDB
try {
mongoose.connect("mongodb://0.0.0.0/BookLibrary", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/review", reviewRoute);
app.use("/contact", contactRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


