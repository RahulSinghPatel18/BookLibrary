import Review from "../model/review.model.js";

export const getreview = async (req, res) => {
    try {
      const { name, review, rating, image } = req.body;
  
      const newReview = new Review({
        name,
        review,
        rating,
        image, // Store the Base64 string of the image
      });
  
      await newReview.save();
      res.status(200).json({ message: 'Review submitted successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Error review' });
    }
  };
  