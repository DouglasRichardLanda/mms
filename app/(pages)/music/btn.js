'use client'
import {IoMdAddCircle} from "react-icons/io";
import React from "react";
import {useAlbumStore} from "@/_store/states";

export default function Btn (props) {

  const val = useAlbumStore((state) => state.visible)
  const { setVisible, setUnvisible } = useAlbumStore();

  return (
    <button
      onClick={setVisible}
      className={props.className}>
      <IoMdAddCircle className={`w-7 h-7 text-white group-hover:text-green-700 duration-200`}/>
    </button>
  )
}