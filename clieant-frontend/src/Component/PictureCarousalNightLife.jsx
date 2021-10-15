import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarousalCardN = () => {
  return (
    <>
      <div className="w-full h-64 relative px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src="https://media.istockphoto.com/photos/cheers-mate-picture-id876903046?b=1&k=20&m=876903046&s=170667a&w=0&h=izmUgruk4w-wO2RpaVofLlS4vkNyPjdFdQkeAnn_7x8="
            alt="food"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0  rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className="absolute w-full left-8  bottom-2 text-white ">
          <h4 className="z-10">Best Bars</h4>
          <h6 className="z-10 flex items-center">
            12 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

const PictureCarousalCardN2 = () => {
  return (
    <>
      <div className="w-full h-64 relative px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src="https://media.istockphoto.com/photos/interior-of-pub-picture-id538680408?b=1&k=20&m=538680408&s=170667a&w=0&h=Lz6l0r7fV0G44vJN8zwj41mRUO1lBfe_z-OYb9no40g="
            alt="food"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0  rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className="absolute w-full left-8  bottom-2 text-white ">
          <h4 className="z-10">Best Pubs</h4>
          <h6 className="z-10 flex items-center">
            5 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};
const PictureCarousalCardN3 = () => {
  return (
    <>
      <div className="w-full h-64 relative px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="food"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0  rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className="absolute w-full left-8  bottom-2 text-white ">
          <h4 className="z-10">Microbreweries</h4>
          <h6 className="z-10 flex items-center">
            12 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};
const PictureCarousalCardN4 = () => {
  return (
    <>
      <div className="w-full h-64 relative px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src="https://media.istockphoto.com/photos/healthy-food-for-lower-cholesterol-and-heart-care-shot-on-wooden-picture-id1279763992?b=1&k=20&m=1279763992&s=170667a&w=0&h=PP9Z4NeTcx5iZodFRxA4bbRG7QgXef9LCQdIh5lr7oY="
            alt="food"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0  rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className="absolute w-full left-8  bottom-2 text-white ">
          <h4 className="z-10">Trending This Week</h4>
          <h6 className="z-10 flex items-center">
            30 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};


export default PictureCarousalCardN;
export  {PictureCarousalCardN2};
export  {PictureCarousalCardN3};
export  {PictureCarousalCardN4};

