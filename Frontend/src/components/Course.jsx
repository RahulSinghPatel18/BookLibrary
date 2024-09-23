import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
  import { useGSAP } from "@gsap/react";
  import gsap from "gsap";
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);

  function Course() {
  useGSAP(()=>{
    gsap.to("video",{
      scale:1.14,
      width:"320vh",
      height:"100%",
      stagger:1,
      scrollTrigger:{
        trigger:"video",
        start:"top 31%",
        end:"top -5%",
        scrub:1,
        // markers:true
  
      }
    })
  }, gsap.to("p",{
 opacity:5,
 y:"-10%",
 delay:1,
    stagger:1,
    scrollTrigger:{
      trigger:"p",
      start:"top 57%",
      end:"top 25%",
      scrub:1,


    }
  }),gsap.to("#item",{
    opacity:5,
 y:"-10%",
    stagger:1,
    delay:1,
    scrollTrigger:{
      trigger:"#item",
      start:"top 65%",
      end:"top 40%",
      scrub:1,
      // markers:true
    }
  }))

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl  container mx-auto h-[680vh] md:h-[368vh] md:px-20 px-4">
        <div className=" items-center justify-center text-center ">
        <h1 className="text-2xl pt-[17vh]  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <h1 id="buy" className="text-4xl text-pink-400 font-semibold text-center mix-blend-exclusion "> Buy a Course</h1>
          <div className=" flex justify-center w-[100%] h-[100%] py-10 object-cover">
            <video className="w-[60%] h-[60%]" mute loop autoPlay src="video.mov"></video>
            </div>
            
          <p className="mt-20 w-[94%] opacity-0">
          Welcome to our Courses section! At [Book Library], 
          we believe in fostering a love for reading, writing,
           and the literary arts. Whether you're an aspiring writer,
            a book enthusiast, or someone looking to deepen your knowledge, 
            we have a variety of courses to suit your interests.
             Browse through our offerings below to find the perfect course for you.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div id="item" className=" mt-[22vh]  grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
