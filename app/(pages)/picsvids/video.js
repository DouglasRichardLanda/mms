'use client'
import React, {useEffect, useRef} from 'react';
import {FaPlayCircle} from "react-icons/fa";
import {useSharedState} from "@/_store/states";
import ReactPlayer from "react-player/lazy";
import {cn} from "@/lib/utils";

export default function Video(props) {
  const {stopPlay, playing} = useSharedState();
  const ref = useRef()
  const [w, setW] = React.useState(null)
  useEffect(() => {
    setW(window.screen.width)
    let handler = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false)
        stopPlay()
      }
    }
    document.addEventListener("mousedown", handler)
  }, []);
  const [open, setOpen] = React.useState(false)
  const path = props.path;

  return (
    <div className={``}>
      <button onClick={() => setOpen(true)} className={` w-[350px] h-[350px] group relative`}>
        <img className={`w-full h-full object-cover relative`} src={props.picture} alt=""/>
        <FaPlayCircle
          className={` absolute top-[35%] left-[40%] w-20 h-20 group-hover:scale-150 group-hover:text-red-800 duration-300`}/>
        <p className={`bg-red-800 py-2`}>{props.name}</p>
      </button>
      <div
        className={cn(open === true ? 'flex' : 'hidden', "bg-black/70 top-0 left-0 w-full h-full fixed justify-center items-center z-30")}>
        <div ref={ref} className={`relative z-[10]`}>
          <VideoPlayer open={open} set={setOpen} path={path} className={``} width={w < 650 ? 300 : 650}/>
        </div>
      </div>
    </div>
  );
}


export function VideoPlayer(props) {

  const {playing, play} = useSharedState()
  const [ready, setReady] = React.useState(false)
  useEffect(() => {
    setReady(true)
  }, []);

  if (!ready) {
    return (
      <div>
        Loading////
      </div>
    )
  } else {
    return (
      <ReactPlayer
        onStart={() => play()}
        onPlay={() => play()}
        playing={playing !== false}
        controls={true}
        url={props.path}
        className={cn(props.className)}
        width={props.width}
      />
    )
  }
}
