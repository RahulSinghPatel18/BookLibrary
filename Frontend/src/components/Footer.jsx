// src/components/Footer.js
import React from 'react';
import { useGSAP } from "@gsap/react";


const Footer = () => {

  
  return (
    <footer  className="bg-gray-800 text-white p-8 md:px-20 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Links Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-2">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="#home" className="font-sans hover:text-gray-400">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="font-sans hover:text-gray-400">About</a>
              </li>
              <li className="mb-2">
                <a href="#services" className= "font-sans hover:text-gray-400">Services</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="font-sans hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h5>
            <form className="flex">
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2  rounded-l-md place-content-between"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="mb-6 text-[3.1vh] md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/rahul-singh-patel-166a15256/"className="hover:text-gray-400">
              <i class="ri-linkedin-line"></i>
            </a>
            <a href="https://www.instagram.com/rahul._singh18?" className="hover:text-gray-400">
              <i class="ri-instagram-line"></i>
              </a>
              <a href="#facebook" className="hover:text-gray-400">
              <i class="ri-facebook-box-fill"></i>
              </a>
              <a href="#twitter" className="hover:text-gray-400">
              <i class="ri-twitter-x-line"></i>
              </a>
              
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <h5 className="text-lg font-semibold mb-2">© 2024 YourCompany</h5>
            <p className='font-sans'>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
