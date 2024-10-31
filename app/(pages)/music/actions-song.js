'use server'
import prisma from "@/prisma/prismaconnect";

export async function action_song_add(data) {

  const rawdata = Object.fromEntries(data)

  await prisma.Song.create({
    data: {
      name: rawdata.name,
      spotify: rawdata.spotify,
      apple: rawdata.apple,
      amazon: rawdata.amazon,
      album: {
        connect: {id: rawdata.album}
      }
    }
  })
}

export async function action_song_update(data) {

  await prisma.Song.update({
    where: {
      id: data[5]
    },
    data: {
      name: data[0],
      apple: data[1],
      spotify: data[2],
      amazon: data[3],
      lyric: data[4]
    }
  })

  return "success"
}