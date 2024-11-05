'use client'

import { IoIosArrowDropdownCircle } from "react-icons/io";

import Link from "next/link";
import {FaAmazon, FaApple, FaEdit, FaSpotify} from "react-icons/fa";
import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {action_song_update} from "@/app/(pages)/music/actions-song";
const stylesel1 = `sm:mb-5 flex w-full justify-between items-center h-fit cursor-pointer sm:flex-row border-b-2 border-red-800 px-[10%] my-3 relative`

export default function Song(props) {

  const [show, setShow] = useState(false)
  const [showWrapper, setShowWrapper] = useState(false)

  const [newName, setNewName] = useState(props.name)
  const [newApple, setNewApple] = useState(props.apple)
  const [newSpotify, setNewSpotify] = useState(props.spotify)
  const [newAmazon, setNewAmazon] = useState(props.amazon)
  const [newLyrics, setNewLyrics] = useState(props.lyric)

  const a = props.lyric.split("\\n")
  return (
    <>
      <div onClick={() => setShow(prev => !prev)} className={"sm:mb-5 flex w-full justify-between items-center h-fit cursor-pointer sm:flex-row border-b-2 border-red-800 md:px-[10%] my-3 relative"}>
        {props.isAdmin && <button
          onClick={(e) => {
            e.stopPropagation()
            setShowWrapper(prev => !prev)
          }}
          className={`absolute lg:right-5 text-2xl -right-[50px] hover:text-red-800 duration-200 px-3 py-2`}>
          <FaEdit className={``} />
        </button>}
        <div className={`flex gap-3 tracking-wider`}>
          {props.picture && <img className={`w-8 h-8 object-cover`} src={props.picture} alt="Song's position in the album"/>}
          <IoIosArrowDropdownCircle className={`w-6 h-6 sm:h-8 sm:w-8 mr-2 sm:mr-5`} />
          <p className={`text-lg sm:text-xl`}>{props.name}</p>
        </div>
        <div className={`flex gap-2 sm:gap-5`}>
          <Link href={props.spotify}><FaSpotify className={`w-6 h-6 sm:w-8 sm:h-8 p-1`}/></Link>
          <Link href={props.apple}><FaApple className={`w-6 h-6 sm:w-8 sm:h-8 p-1`}/></Link>
          <Link href={props.amazon}><FaAmazon className={`w-6 h-6 sm:w-8 sm:h-8 p-1`}/></Link>
        </div>
      </div>
      <div className={cn(`md:w-[50%] w-[80%] mx-auto max-h-[400px] overflow-auto p-5 flex-col`, show ? "flex" : "hidden")}>
        {a.map((el, i) => {
          return <p key={i} className={cn(el === " " ? "pb-5" : "")}>{el}</p>
        })}
      </div>
      <div className={cn(`top-0 left-0 w-full h-screen bg-black/80 z-[1000] fixed justify-center items-center`, showWrapper ? "flex" : "hidden")}>
        <form
          className={`w-1/2 border-2 border-white p-5 rounded`}>
          <div className={`my-5 flex flex-col`}>
            <p>Name</p>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className={`text-black p-2 w-full`}/>
            <p>Apple link</p>
            <input type="text" value={newApple} onChange={(e) => setNewApple(e.target.value)} className={`text-black p-2 w-full`}/>
            <p>Spotify link</p>
            <input type="text" value={newSpotify} onChange={(e) => setNewSpotify(e.target.value)} className={`text-black p-2 w-full`}/>
            <p>Amazon link</p>
            <input type="text" value={newAmazon} onChange={(e) => setNewAmazon(e.target.value)} className={`text-black p-2 w-full`}/>
            <p>Lyrics</p>
            <textarea value={newLyrics} onChange={(e) => setNewLyrics(e.target.value)} rows={10} className={`text-black p-2 w-full`} />
            <p className={`text-gray-300 italic p-2`}>By editing your text use: \n for a new line, or \n\n to make a gap between lines</p>
          </div>
          <div className={`flex justify-between`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                setShowWrapper(false)
              }}
              className={`px-6 py-3 bg-white hover:bg-gray-200 duration-200 text-black uppercase text-xl`}>close</button>
            <button
              type={"submit"}
              onClick={async (e) => {
                e.preventDefault()
                const response = await action_song_update([newName, newApple, newSpotify, newAmazon, newLyrics, props.songId])
                setShowWrapper(false)
              }}
              className={`px-6 py-3 bg-white hover:bg-gray-200 duration-200 text-black uppercase text-xl`}>submit</button>
          </div>
        </form>
      </div>
    </>
  )
}