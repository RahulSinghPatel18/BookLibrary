import React from "react";
import 'remixicon/fonts/remixicon.css';

function Cards({ item }) {
  return (
    <>
      <div className=" p-2 md:p-8 ">
        <div className="card  bg-base-100 shadow-xl  duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <img
            className="absolute top-4 right-4 z-20 w-10 h-10 p-2  object-cover"
            src="/heart.png"
            alt="Heart icon"/>
           <button className="px-4 py-2 bg-green-500 w-[20vh] font-semibold text-gray-100 absolute rounded-l-2xl z-10">Trending</button>
          <figure className="overflow-hidden  rounded-2xl">
            <img className="rounded-2xl w-[45vh] h-[40vh] hover:scale-110 transition-all duration-500 " src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body mt-[-3vh] hover:mt-0 transition-all duration-500">
            <h2 className="card-title text-base">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-gray-400">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline mt-1 text-green-500">${item.price}</div>
              <div className=" cursor-pointer px-4 py-1 rounded-full border-[1px] hover:bg-pink-500  hover:border-[0px]  hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;