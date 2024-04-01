'use client'
import React, {useState, useEffect, useRef} from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import Link from "next/link"
import {cn} from "@/lib/utils";
import { usePathname } from 'next/navigation'
import {FaApple, FaFacebook, FaInstagram, FaSpotify, FaTiktok, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

function Sidebar() {
  const menuRef = useRef();
  const menu2Ref = useRef();
  const menu3Ref = useRef();
  const pathname = usePathname()
  let [open, setOpen] = useState(false);
  let [current, setCurrent] = useState('');

  useEffect(() => {
    open === true ? setOpen(false) : ``;
    if (pathname === "/") {
      setCurrent("HOME")
    } else if (pathname === "/picsvids") {
      setCurrent("Pics & Vids")
    } else if (pathname === "/soon") {
      setCurrent("store")
    }
    else {
      setCurrent(pathname.replace('/',''))
    }
  }, [pathname]);
  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current?.contains(e.target) & !menu2Ref.current?.contains(e.target) & !menu3Ref.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
  }, []);

  const styleel1 = `duration-300 hover:text-red-800 text-[40px] w-fit`;
  const styleel2 = `w-7 h-7 hover:text-red-800 duration-300 hover:scale-125`
  return (
    <>
      <div className={cn(`fixed top-0 w-full h-screen overflow-hidden duration-300`, open === true ? `bg-black/70 z-10`: `bg-black/0 -z-10`)}></div>
      <div className={cn(`fixed left-0 lg:mt-0 mt-5 px-5 w-fit z-30`, open === true ? `z-30`: `z-20`)}>
        <div className={`flex bg-black border-[1px] rounded p-2`}>
          <button className={``} ref={menu3Ref} onClick={() => {setOpen(!open)}}><HiOutlineMenu className={cn(`w-8 h-8 hover:text-red-800 duration-300 relative z-50`,open === true ? 'rotate-90': '')} /></button>
          <button><Link href={'/'} onClick={() => {setOpen(open = false)}}><FiHome className={cn('w-8 h-8 hover:text-red-800 duration-300 ml-5 relative z-50')} /></Link></button>
          <button className={'w-fit h-8 ml-5 uppercase text-3xl text-red-800'}>{current}</button>
        </div>
        <div className={cn(`mt-5 duration-300`, open === true ? ` opacity-1`: `hidden opacity-0`)}>
          <div ref={menuRef} className={cn('flex flex-col relative duration-300 gap-4 w-fit', open === true ? `opacity-1 visible` : `opacity-0 invisible`)}>
            <Link href={'/'} className={styleel1} >Home</Link>
            <Link href={'/news'} className={styleel1} >News</Link>
            <Link href={'/music'} className={styleel1} >Music</Link>
            <Link href={'/picsvids'} className={styleel1} >Pics & Vids</Link>
            <Link href={'/soon'} className={styleel1} >Store</Link>
            <Link href={'/subscribe'} className={cn(styleel1, `lg:hidden`)} >Subscribe</Link>
          </div>
          <div ref={menu2Ref} className={cn(`lg:hidden flex duration-300 gap-4 mt-5`, open === true ? `opacity-1 visible` : `opacity-0 invisible `)}>
            <Link href={`https://www.facebook.com/profile.php?id=61557123352501`}><FaFacebook className={styleel2} /></Link>
            <Link href={`https://twitter.com/MadMansSpirit`}><FaXTwitter className={styleel2} /></Link>
            <Link href={`https://www.instagram.com/madmansspiritofficial/`}><FaInstagram className={styleel2} /></Link>
            <Link href={`https://www.youtube.com/channel/UCqWZpGmXXUd23ML3pfSH4pg`}><FaYoutube className={styleel2} /></Link>
            <Link href={`https://open.spotify.com/intl-de/artist/0xnJ8yCRbsEhQBaCNkTAFC`}><FaSpotify className={styleel2} /></Link>
            <Link href={`https://music.apple.com/us/artist/mad-mans-spirit/1734707689`}><FaApple className={styleel2} /></Link>
            <Link href={`https://www.tiktok.com/@mad.mans.spirit`}><FaTiktok className={styleel2} /></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;