'use client'
import {IoMdAddCircle} from "react-icons/io";
import {useVidsStore} from "@/_store/states";

export default function ToolbarVids (props) {

  const val = useVidsStore((state) => state.visible)
  const { setVisible, setUnvisible } = useVidsStore();

  return (
    <button
      onClick={setVisible}
      className={`fixed right-16 bottom-20 rounded z-20 hover:bg-white hover:text-black duration-200`}>
      <IoMdAddCircle className={`w-12 h-12`} />
    </button>
  )
}