'use client'

import {MdDelete} from "react-icons/md";
import React from "react";
import {useNewsStore} from "@/_store/states";

export default function Btn (props) {

  const isSubmitted = async () => {
    await props.fn(props.id)
  }

  return (
    <button className={props.className} onClick={() => isSubmitted()}>
      <MdDelete className={`w-8 h-8`} />
    </button>
  )
}