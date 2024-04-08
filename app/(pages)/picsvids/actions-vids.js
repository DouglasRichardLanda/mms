'use server'

import prisma from "@/prisma/prismaconnect";

export async function action_vids_add (data) {
  const onj = Object.fromEntries(data)
  await prisma.News.create({
    data: {
      title: onj.title,
      text: onj.text
    }
  })
}