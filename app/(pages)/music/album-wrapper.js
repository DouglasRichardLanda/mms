'use client'
import {cn} from "@/lib/utils";
import {useAlbumStore} from "@/_store/states";
import {useEffect, useRef} from "react";
import {action_song_add} from "@/app/(pages)/music/actions-song";

export default function WrapperAlbum (props) {
  const ref = useRef()

  const val = useAlbumStore((state) => state.visible);
  const { setVisible, setUnvisible } = useAlbumStore();
  const isSubmitted = async (data) => {
    data.preventDefault()
    const formData = new FormData(data.target)
    if (formData.get('name') === '') {
      setUnvisible()
      return
    }
    await action_song_add(formData)
    setUnvisible()
  }


  return (
    <div className={cn(`top-0 left-0 w-full h-full bg-black/80 z-30 flex justify-center items-center flex-col`, val === false ? 'hidden' : 'fixed')}>
      <form
        onSubmit={(data) => isSubmitted(data)}
        className={`rounded flex flex-col gap-2 border-2 border-white p-5 w-2/3 h-[40vh] justify-between text-center`}
      >
        <input type="text" name={'name'} className={`p-2 rounded text-black w-full`} placeholder={'Name of your songs'}/>
        <input type="text" name={'spotify'} className={`p-2 rounded text-black w-full`} placeholder={'Spotify link'}/>
        <input type="text" name={'apple'} className={`p-2 rounded text-black w-full`} placeholder={'Apple music link'}/>
        <input type="text" name={'amazon'} className={`p-2 rounded text-black w-full`} placeholder={'Amazon music link'}/>
        <input type="hidden" name={`album`} value={props.id}/>
        <div className={`flex justify-around items-center`}>
          <button className={`hover:bg-green-600 duration-200 py-2 w-1/3 rounded`}>Submit</button>
          <button className={`hover:bg-red-600 duration-200 py-2 w-1/3 rounded`} type={"submit"} onClick={setUnvisible}>Close</button>
        </div>
      </form>
    </div>
  )
}