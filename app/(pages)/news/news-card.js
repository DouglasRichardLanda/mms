'use client'
import {cn} from "@/lib/utils";
import Btn from "@/app/(pages)/news/btn";
import {action_news_delete, action_news_update} from "@/app/(pages)/news/actions-news";
import EditBtn from "@/app/(pages)/news/edit-btn";
import React, {useState} from "react";
import {MdModeEditOutline} from "react-icons/md";


export default function NewsCard(props) {

  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState(props.title)
  const [text, setText] = useState(props.text)

  const formatedText = props.text;
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const createLinkifiedText = (text) => {
    const parts = text.split(urlRegex);
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {part}
          </a>
        );
      } else {
        return `${part} \n`;
      }
    });
  };


  return (
    <article className={cn(props.className, `rounded p-2 border-[1px] mb-5`)}>
      <div className={`flex justify-between`}>
        <h2 className={`text-3xl mb-5 tracking-wider`}>{props.title}</h2>
        {props.isAdmin !== '' ? <div className={`flex`}>
          <Btn fn={action_news_delete} id={props.id} className={`hover:text-red-500 duration-200`}/>
          <button onClick={(e) => {
            e.preventDefault()
            setOpen((prev) => !prev)
          }}><MdModeEditOutline className={`w-8 h-8`}/></button>
          {/*<EditBtn fn={action_news_update} id={props.id} className={`hover:text-green-500 duration-200`} />*/}
        </div> : null}
      </div>
      {formatedText.split('\n').map((line, i) => (
        <p key={i} className="tracking-wider mb-2">
          {createLinkifiedText(line)}
        </p>
      ))}
      <form
        onSubmit={async (e) => {
          e.preventDefault()

          const data = {
            id: props.id,
            title: e.target[0].value,
            text: e.target[1].value
          }

          const response = await action_news_update(data);
          setOpen(false)

        }}
        className={cn(`border-[1px] border-white p-2 flex-col gap-2`, open === true ? "flex" : "hidden")}>
        <div className={`flex gap-2 items-center`}>
          <span className={`w-[10%]`}>Title:</span>
          <input type="text" value={title} className={`text-black p-2 w-[70%]`} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className={`flex gap-2 items-center`}>
          <span className={`w-[10%]`}>Content</span>
          <textarea rows="5" className={`w-[70%] text-black p-2`} value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <button className={`hover:bg-blue-600 duration-200 p-2`}>Submit</button>
      </form>
    </article>
  )
}