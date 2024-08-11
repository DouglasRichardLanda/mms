'use server'

import prisma from "@/prisma/prismaconnect";
import {revalidatePath} from "next/cache";

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

export async function action_news_update (data) {
  await prisma.News.update({
    where: {
      id: data.id
    },
    data: {
      title: data.title,
      text: data.text
    }
  })

  revalidatePath("/news")

}