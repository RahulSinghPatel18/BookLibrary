import React from 'react';
import Navbar from './Navbar';
import 'remixicon/fonts/remixicon.css';
import Footer from "./Footer"

const About = () => {
  return (
  <>
  <Navbar/>
    <div className="h-[235vh]  md:h-[90vh]  md:h-[85vh] bg-white dark:bg-gray-900 dark:text-white py-[15vh] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-500 uppercase">
            About Us
          </h2>
          <h1 className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
            Welcome to Book Library
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Your one-stop destination for all kinds of books. From fiction to
            non-fiction, bestsellers to hidden gems, we have it all.
          </p>
        </div>

        <div className="mt-10 px-20">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-8">
            {/* About Section 1 */}
            <div className="max-w-md px-4 py-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:scale-95  transition-all duration-300 ">
              <h3 className="text-lg text-center leading-6 font-medium text-gray-900 dark:text-white  ">
                Our Mission
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                At Book Library, we aim to foster a love for reading by providing a
                wide range of books for readers of all ages and interests.
              </p>
            </div>

            {/* About Section 2 */}
            <div className="max-w-md px-4 py-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:scale-95 transition-all duration-300">
              <h3 className="text-lg  text-center leading-6 font-medium text-gray-900 dark:text-white">
                Our Collection
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                Whether you're looking for the latest bestsellers, timeless
                classics, or unique titles from independent authors, you'll find
                it at Book Library.
              </p>
            </div>
 
            {/* About Section 3 */}
            <div className="max-w-md px-4 py-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:scale-95 transition-all duration-300">
              <h3 className="text-lg text-center leading-6 font-medium text-gray-900 dark:text-white">
                Community Focus
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                We believe in the power of books to build communities. That's
                why we host regular events, author signings, and book clubs to
                engage with our readers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center ">
          <h2 className="text-2xl hover:text-[3.6vh] transition-all hover:text-pink-400 font-bold mb-4">Join Our Book Library Family</h2>
          <p className="text-gray-500 dark:text-gray-400  ">
            Follow us on social media or subscribe to our newsletter for the
            latest updates and offers!
          </p>
         
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
