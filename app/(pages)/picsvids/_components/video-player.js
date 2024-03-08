'use client'
import React, {useEffect} from "react";
import ReactPlayer from 'react-player/lazy'
import {cn} from "@/lib/utils";

export default function VideoPlayer (props) {
  const videoRef = React.useRef()
  const [open, setOpen] = React.useState(false)
  useEffect(() => {
    let handler = (e) => {
      if(!videoRef.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
  }, []);
  function player (e) {
    setOpen(true)
  }

  return (
    <ReactPlayer
      ref={props.ref}
      controls={true}
      url='https://www.youtube.com/watch/CUuR9S7xriY?si=S6Bk1sfKj_HaWC2m'
      className={cn(props.className, open === false ? 'hidden' : 'block')}
    />
  )
}