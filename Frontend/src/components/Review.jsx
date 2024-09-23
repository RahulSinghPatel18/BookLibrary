import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Review = () => {
  const [imageshow, setImageshow] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reviewData = {
      name: formData.get('name'),
      review: formData.get('review'),
      rating: formData.get('rating'),
      image: imageshow, // Assuming you have base64 image from image preview
    };

    try {
      const response = await fetch('http://localhost:3000/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      toast.success("Submit review successfully");
      const result = await response.json();
      console.log(result);
     
    } catch (error) {
      toast.error("Error: " + err.response.data.message);

    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageshow(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 md:px-0">
        <div className="w-full md:w-[600px]">
          <div className="modal-box">
            <form id='sendreview' method='post' name='myform' onSubmit={handleSubmit}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-2xl md:text-3xl">Review</h3>

              {/* Image Upload */}
              <div className="mt-4 space-y-2">
                <label className="block">Image</label>

                {imageshow && (
                  <div className="mt-4 flex justify-center">
                    <img
                      src={imageshow}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-full border border-gray-300" />
                  </div>)}

                <input
                  type="file"
                  name="image"
                  className="w-full md:w-[25rem] px-3 py-1 border rounded-md outline-none mt-2"
                  onChange={handleImageChange}
                />
              </div>

              {/* Name Input */}
              <div className="mt-4 space-y-2">
                <label className="block">Your Name</label>
                <input
                  type="text" required
                  name="name"
                  placeholder="Enter your name"
                  className="w-full md:w-[25rem] px-3 py-1 border rounded-md outline-none"
                />
              </div>

              {/* Review Input */}
              <div className="mt-4 space-y-2">
                <label className="block">Your Review</label>
                <input required
                  type="text"
                  name="review"
                  placeholder="Enter your review"
                  className="w-full md:w-[25rem] px-3 py-4 border rounded-md outline-none"
                />
              </div>

              {/* Star Rating */}
              <div className="mt-4 space-y-2">
                <label className="block">Your Rating in ⭐️⭐️⭐️ Stars</label>
                <textarea required
                  name="rating"
                  placeholder="Give your rating"
                  className="w-full md:w-[25rem] px-3 py-1 border rounded-md outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex mt-5">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-green-500 text-white rounded-md px-4 py-3 hover:bg-green-600 duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;