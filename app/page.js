'use client'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className={`flex justify-center items-center overflow-hidden`}>
        <motion.img
          initial={{opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          animate={{opacity: 1}}
          className={`lg:w-1/3 sm:w-1/2 absolute top-[25%]`}
          src="/debut/pitbul.png"
          alt="debut release picture"
        />
        <motion.img
          initial={{opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          animate={{opacity: 1,}}
          className={`absolute top-[44%] sm:right-[10%] object-cover sm:w-1/2`}
          src="/debut/outNow.png"
          alt="second picture"
        />
        <motion.img
          initial={{opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          animate={{opacity: 1,}}
          className={`absolute top-[33%]  object-cover sm:w-1/2`}
          src="/debut/debut.png"
          alt="third picture"
        />
    </main>
  )
}
