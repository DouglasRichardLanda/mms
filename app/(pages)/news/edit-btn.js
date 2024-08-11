'use client'
import { MdModeEditOutline } from "react-icons/md";
import {useNewsStoreEdit} from "@/_store/states";

export default function EditBtn (props) {

  const { setVisibleEdit} = useNewsStoreEdit();
  const isSubmitted = async () => {
    setVisibleEdit()
  }

  return (
    <button className={props.className} onClick={() => isSubmitted()}>
      <MdModeEditOutline className={`w-8 h-8`}/>
    </button>
  )
}