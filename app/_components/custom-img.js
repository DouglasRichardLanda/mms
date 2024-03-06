'use client'
import {motion} from "framer-motion"
import React from "react";

export default function CustomImg(props) {
  return (
    <motion.img
      initial={{opacity: 0}}
      transition={{delay: props.delay, duration: 0.5}}
      animate={{opacity: 1}}
      className={props.className}
      src={props.src}
      alt="debut release picture"
      width={props.width}
      height={props.height}
    />
  )
}