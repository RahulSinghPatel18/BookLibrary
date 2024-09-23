import mongoose from "mongoose";

// Review Schema
const reviewSchema = new mongoose.Schema({
    name: String,
    review: String,
    rating: String,
    image: String, // Storing image as a base64 string
  });

  const Review = mongoose.model("Review", reviewSchema);

  export default Review;
  