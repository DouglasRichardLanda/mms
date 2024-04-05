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