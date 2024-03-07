'use client'
import React, {useEffect, useRef} from 'react';
import {FaPlayCircle} from "react-icons/fa";
import {cn} from "@/lib/utils";

function Video(props) {
  const [open, setOpen] = React.useState(false)
  const [w, setW] = React.useState(null)
  const videoRef = useRef();
  const player = () => {
    setOpen(!open)
  }
  useEffect(() => {
    const updateWidth = () => {
      setW(window.innerWidth);
    };

    // Check if window is defined (to prevent server-side rendering issues)
    if (typeof window !== 'undefined') {
      // Add event listener to update width when window is resized
      window.addEventListener('resize', updateWidth);
      // Initial width update
      updateWidth();

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }
  }, []);
  useEffect(() => {
    let handler = (e) => {
      if(!videoRef.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
  }, []);
  return (
    <div className={`flex`}>
      <div className={` w-[350px] h-[300px] flex flex-col justify-center items-center bg-black group`}>
        <div className={`h-[80%] flex justify-center items-center relative`}>
          <img className={`w-full h-full object-cover`} src="/debut/pitbul.png" alt=""/>
          <FaPlayCircle onClick={player} className={`absolute top-[40%] left-[40%] w-10 h-10  cursor-pointer group-hover:scale-150 duration-300 group-hover:text-red-800`}/>
        </div>
        <div className={`h-[20%] flex justify-center items-center bg-red-900 w-full tracking-wider text-xl`}>
          Pitbull (Official Video)
        </div>
      </div>
      <div className={cn(`absolute h-fill left-0 right-0 bottom-[20%] bg-black/50 justify-center items-center flex-col hidden`, open === true ? "flex" : "hidden")}>
        <p className={``}></p>
        <VideoPlayer ref={videoRef} w={w > 600 ? 560 : 300} />
      </div>
    </div>
  );
}

export default Video;

export function VideoPlayer (props) {
  return (
    <iframe className={props.className} width={props.w} height="315" src="https://www.youtube.com/embed/CUuR9S7xriY?si=S6Bk1sfKj_HaWC2m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}