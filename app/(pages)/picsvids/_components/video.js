import React from 'react';
import { FaPlayCircle } from "react-icons/fa";

function Video(props) {
  return (
    <div className={`flex`}>
      <div className={` w-[350px] h-[300px] flex flex-col justify-center items-center bg-black`}>
        <div className={`h-[80%] flex justify-center items-center relative`}>
          <img className={`w-full h-full object-cover`} src="/debut/pitbul.png" alt=""/>
          <FaPlayCircle className={`absolute top-[40%] left-[40%] w-10 h-10  cursor-pointer`} />
        </div>
        <div className={`h-[20%] flex justify-center items-center bg-red-900 w-full tracking-wider text-xl`}>
          Pitbull (Official Video)
        </div>
      </div>
    </div>
  );
}

export default Video;