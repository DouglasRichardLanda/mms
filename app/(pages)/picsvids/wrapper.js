'use client'
import {cn} from "@/lib/utils";
import {useVidsStore} from "@/_store/states";
import {useEffect, useRef, useState} from "react";
import {action_vids_add} from "./actions-vids";

export default function Wrapper (props) {
  const ref = useRef()
  const val = useVidsStore((state) => state.visible);
  const { setVisible, setUnvisible } = useVidsStore();

  const isSubmitted = async (data) => {
    data.preventDefault()
    const file = inputFileRef.current.files[0];

    if (!file || !title || !link) {
      setUnvisible()
      return
    }

    const response = await fetch(
      `/api/vids?filename=${file.name}&title=${title}&link=${link}`,
      {
        method: 'POST',
        body: file,
      },
    );
    setUnvisible()
  }
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')

  const inputFileRef = useRef(null);

  return (
    <div className={cn(`top-0 left-0 w-full h-full bg-black/80 z-30 flex justify-center items-center flex-col`, val === false ? 'hidden' : 'fixed')}>
      <form
        onSubmit={(data) => isSubmitted(data)}
        className={`rounded flex flex-col gap-2 border-2 border-white p-5 w-2/3 h-[30vh] text-center`}
      >
        <input type="text" value={title}
               onChange={(e) => setTitle(e.target.value)}
               className={`p-2 rounded text-black w-full`} placeholder={'Title'}/>
        <input type="text" value={link}
               onChange={(e) => setLink(e.target.value)}
               className={`p-2 rounded text-black w-full`} placeholder={'YouTube link'}/>

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