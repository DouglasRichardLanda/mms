'use client'
import {IoMdAddCircle} from "react-icons/io";
import {useNewsStore} from "@/_store/states";

export default function ToolbarNews (props) {

  const val = useNewsStore((state) => state.visible)
  const { setVisible, setUnvisible } = useNewsStore();


  return (
    <button
      onClick={setVisible}
      className={`fixed right-16 bottom-20 rounded z-20 hover:bg-white hover:text-black duration-200`}>
      <IoMdAddCircle className={`w-12 h-12`} />
    </button>
  )
}