import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import toast from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        // throw new Error(`Error: ${response.status}`)
        toast.error("Error: " + err.response.data.message);
      }

      const result = await response.json();
      console.log(result);

      toast.success('Contact form submitted successfully');
    } catch (error) {
      console.error('Error submitting contact:', error);
      toast.error('Error submitting contact form');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-lg p-5">
          <div className="modal-box">
            <form id="datasend" name="myform" method="post" onSubmit={handleSubmit}>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"></Link>
              <h3 className="font-bold text-3xl">Contact Us</h3>

              <div className="mt-4 space-y-2">
                <label className="block">Name</label>
                <input
                  type="text" required
                  placeholder="Enter your fullname"
                  name="name"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                />
              </div>

              <div className="mt-4 space-y-2">
                <label className="block">Email</label>
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                />
              </div>

              <div className="mt-4 space-y-2">
                <label className="block">Message</label>
                <textarea
                  required
                  name="message"
                  placeholder="Type your message"
                  className="w-full px-3 py-2 border rounded-md outline-none h-32"
                />
              </div>

              <div className="mt-5">
                <button className="w-full bg-blue-500 text-white rounded-md px-4 py-3 hover:bg-pink-700 transition duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
