'use server'

import prisma from "@/prisma/prismaconnect";

export async function action_news_add (data) {
  const onj = Object.fromEntries(data)
  await prisma.News.create({
    data: {
      title: onj.title,
      text: onj.text
    }
  })
}

export async function action_news_delete (data) {
  await prisma.News.delete({
    where: {
      id: data
    }
  })
}