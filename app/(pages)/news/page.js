import React from 'react';
import {cn} from "@/lib/utils";
import {cookies} from "next/headers";
import Toolbar from "@/app/_components/toolbar";
import {action_news_add, action_news_delete} from "./actions-news";
import Btn from "@/app/(pages)/news/btn";
import {useNewsStore} from "@/_store/news"
import Wrapper from "@/app/(pages)/news/wrapper";
import prisma from "@/prisma/prismaconnect";

export async function NewsCard (props) {

  const formatedText = props.text;
  const parts = formatedText.toString().split('\n')

  cookies();
  const isAdmin = cookies().get("session")?.value || ''

  return (
    <article className={cn(props.className, `rounded p-2 border-[1px]`)}>
      <div className={`flex justify-between`}>
        <h2 className={`text-3xl mb-5 tracking-wider`}>{props.title}</h2>
        {isAdmin !== '' ? <div>
          <Btn fn={action_news_delete} id={props.id} className={`hover:text-red-500 duration-200`} />
        </div> : null}
      </div>
      {parts.map((el, i) => {
        return (
          <p key={i} className={`tracking-wider mb-2`}>
            {el}
          </p>
        )
      })}
    </article>
  )
}

export default async function Page(props) {

  cookies();
  const isAdmin = cookies().get("session")?.value || ''

  const news = await prisma.News.findMany()
  console.log( news)
  return (
    <section className={`mb-24 flex flex-col gap-2`}>

      {news.map((el, i) => (
        <NewsCard key={i} id={el.id} text={el.text} title={el.title} />
      ))}

      {isAdmin !== '' ? <Toolbar fn={'news'} /> : null}
      <Wrapper />
    </section>
  );
}
