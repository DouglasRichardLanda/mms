'use client'

import {cn} from "@/lib/utils";
import {useNewsStoreEdit} from "@/_store/states";
import {useEffect, useRef} from "react";

export default function EditWrapper (props) {
  const ref = useRef()
  const val = useNewsStoreEdit((state) => state.visibleEdit);
  const { setVisibleEdit, setUnvisibleEdit } = useNewsStoreEdit();

  const isSubmitted = async (data) => {
    data.preventDefault()
    const formData = new FormData(data.target)
    if (formData.get('text') === '') {
      setUnvisibleEdit()
      return
    }
    // await action_news_add(formData)
    setUnvisibleEdit()
  }

  return (
    <div className={cn(`top-0 left-0 w-full h-full bg-black/80 z-30 flex justify-center items-center flex-col`, val === false ? 'hidden' : 'fixed')}>
      <form
        onSubmit={(data) => isSubmitted(data)}
        className={`rounded flex flex-col gap-2 border-2 border-white p-5 w-2/3 h-[60vh] text-center`}
      >
        <input type="text" name={'title'} className={`p-2 rounded text-black w-full`} placeholder={'Title'}/>
        <textarea name={'text'} id="" cols="30" rows="15" className={`text-black p-2 rounded`} placeholder={`Edit`}></textarea>
        <div className={`flex justify-around items-center`}>
          <button className={`hover:bg-green-600 duration-200 py-2 w-1/3 rounded`}>Submit</button>
          <button className={`hover:bg-red-600 duration-200 py-2 w-1/3 rounded`} type={"submit"} onClick={setUnvisibleEdit}>Close</button>
        </div>
      </form>
    </div>
  )
}