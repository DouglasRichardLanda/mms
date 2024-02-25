import React from 'react';
import { FaSpotify, FaApple, FaTiktok } from "react-icons/fa";
import Image from 'next/image'
import pitbullPic from "/public/debut/pitbulOhne.png"

function Album(props) {

  const stylesel1 = `sm:mb-2 flex w-full justify-between items-center h-fit sm:flex-row`

  return (
    <div className={`flex bg-red-800 p-2 md:w-[80%] justify-between sm:flex-row flex-col items-center w-fit`}>
      <div className={`mb-5 sm:mb-0 sm:mr-5`}>
        <Image
          src={pitbullPic}
          alt="Picture of the author"
          className={`sm:max-h-[200px] max-w-[320px] sm:w-auto h-auto text-center`}
        />
      </div>
      <div className={`w-full flex flex-col justify-center gap-2`}>
          <div className={stylesel1}>
            <div className={`flex gap-3 tracking-wider`}>
              <img className={`w-8 h-8 object-cover`} src="/debut/Dice1.png" alt=""/>
              <p className={`text-xl`}>Fallen Angel</p>
            </div>
            <div className={`flex gap-5`}>
              <FaSpotify className={`w-8 h-8 p-1`} /> <FaApple className={`w-8 h-8 p-1`} /> <FaTiktok className={`w-8 h-8 p-1`} />
            </div>
          </div>
          <div className={stylesel1}>
            <div className={`flex gap-3 tracking-wider`}>
              <img className={`w-8 h-8 object-cover`} src="/debut/Dice2.png" alt=""/>
              <p className={`text-xl`}>Lies</p>
            </div>
            <div className={`flex gap-5`}>
              <FaSpotify className={`w-8 h-8 p-1`} /> <FaApple className={`w-8 h-8 p-1`} /> <FaTiktok className={`w-8 h-8 p-1`} />
            </div>
          </div>
          <div className={stylesel1}>
            <div className={`flex gap-3 tracking-wider`}>
              <img className={`w-8 h-8 object-cover`} src="/debut/Dice3.png" alt=""/>
              <p className={`text-xl`}>Pitbull</p>
            </div>
            <div className={`flex gap-5`}>
              <FaSpotify className={`w-8 h-8 p-1`} /> <FaApple className={`w-8 h-8 p-1`} /> <FaTiktok className={`w-8 h-8 p-1`} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Album;