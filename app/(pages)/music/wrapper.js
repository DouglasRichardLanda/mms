'use client'
import {cn} from "@/lib/utils";
import {useMusicStore} from "@/_store/states";
import {useEffect, useRef, useState} from "react";
import {action_music_add} from "./actions-music"
import prisma from "@/prisma/prismaconnect";

export default function Wrapper (props) {
  const ref = useRef()

  const val = useMusicStore((state) => state.visible);
  const { setVisible, setUnvisible } = useMusicStore();

  const inputFileRef = useRef(null);
  const [name, setName] = useState('')

  const isSubmitted = async (data) => {
    data.preventDefault()
    const file = inputFileRef.current.files[0];

    const response = await fetch(
      `/api/music?filename=${file.name}&name=${name}`,
      {
        method: 'POST',
        body: file,
      },
    );
    setUnvisible()
  }

  return (
    <div className={cn(`top-0 left-0 w-full h-full bg-black/80 z-30 flex justify-center items-center flex-col`, val === false ? 'hidden' : 'fixed')}>
      <form
        onSubmit={(data) => isSubmitted(data)}
        className={`rounded flex flex-col gap-2 border-2 border-white p-5 w-2/3 h-[30vh] justify-between text-center`}
      >
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`p-2 rounded text-black w-full`} placeholder={'Album name'}/>
        
        <div>
          <input name={`file`} type="file" ref={inputFileRef} />
        </div>
        
        <div className={`flex justify-around items-center`}>
          <button className={`hover:bg-green-600 duration-200 py-2 w-1/3 rounded`}>Submit</button>
          <button className={`hover:bg-red-600 duration-200 py-2 w-1/3 rounded`} type={"submit"} onClick={setUnvisible}>Close</button>
        </div>
      </form>
    </div>
  )
}