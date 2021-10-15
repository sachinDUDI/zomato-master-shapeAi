import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

const ImageGrid = (props) => {
  return (
    <>
      <div className="hidden w-full h-96 md:flex gap-1">
        <div className="w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="restuarant image"
            className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
          />
        </div>
        <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="restuarant image"
            className="w-full h-2/4 object-cover rounded-lg  transform transition duration-700 hover:scale-110"
          />
          <img
            src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="restuarant image"
            className="w-full h-2/4 object-cover rounded-lg  transform transition duration-700 hover:scale-110"
          />
        </div>
        <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
          <div className="w-full h-2/4 relative ">
            <img
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="restuarant image"
              className="w-full h-full object-cover rounded-lg "
            />
            <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg " />
            <h4 className="absolute inset-y-2/4	z-20 w-full h-full text-center text-white font-semibold">
              View Gallery
            </h4>
          </div>
          <div className="w-full h-2/4 relative ">
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="restuarant image"
              className="w-full h-full object-cover rounded-lg "
            />
            <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded-lg " />
            <div className="absolute flex flex-col items-center inset-y-1/4 z-20 w-full h-full text-center text-white font-semibold">
              <div className="bg-black p-3 rounded-full bg-opacity-50">
                <AiOutlineCamera />
              </div>
              <h4 className="">View Gallery</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;