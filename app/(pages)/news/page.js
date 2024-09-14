
import React from 'react';
import {cn} from "@/lib/utils";
import {cookies} from "next/headers";
import ToolbarNews from "@/app/(pages)/news/toolbar-news";
import {action_news_add, action_news_delete, action_news_update} from "./actions-news";
import Btn from "@/app/(pages)/news/btn";
import {useNewsStore} from "@/_store/states"
import Wrapper from "@/app/(pages)/news/wrapper";
import prisma from "@/prisma/prismaconnect";
import EditBtn from "@/app/(pages)/news/edit-btn";
import EditWrapper from "@/app/(pages)/news/edit-wrapper";
import NewsCard from "@/app/(pages)/news/news-card";

// export async function NewsCard (props) {
//
//   const formatedText = props.text;
//   const urlRegex = /(https?:\/\/[^\s]+)/g;
//
//   const createLinkifiedText = (text) => {
//     const parts = text.split(urlRegex);
//     return parts.map((part, index) => {
//       if (part.match(urlRegex)) {
//         return (
//           <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//             {part}
//           </a>
//         );
//       } else {
//         return `${part} \n`;
//       }
//     });
//   };
//
//   cookies();
//   const isAdmin = cookies().get("session")?.value || ''
//
//
//   return (
//     <article className={cn(props.className, `rounded p-2 border-[1px] mb-5`)}>
//       <div className={`flex justify-between`}>
//         <h2 className={`text-3xl mb-5 tracking-wider`}>{props.title}</h2>
//         {isAdmin !== '' ? <div className={`flex`}>
//           <Btn fn={action_news_delete} id={props.id} className={`hover:text-red-500 duration-200`} />
//           <EditBtn fn={action_news_update} id={props.id} className={`hover:text-green-500 duration-200`} />
//         </div> : null}
//       </div>
//       {formatedText.split('\n').map((line, i) => (
//         <p key={i} className="tracking-wider mb-2">
//           {createLinkifiedText(line)}
//         </p>
//       ))}
//     </article>
//   )
// }

export default async function Page(props) {

  cookies();
  const isAdmin = cookies().get("session")?.value || ''

  const news = await prisma.News.findMany()


  return (
    <section className={`mb-24 flex flex-col gap-2`}>

      {news.reverse().map((el, i) => (
        <NewsCard key={i} id={el.id} text={el.text} title={el.title} isAdmin={isAdmin} />
      ))}

      {isAdmin !== '' ? <ToolbarNews fn={'news'} /> : null}
      <Wrapper />
    </section>
  );
}
