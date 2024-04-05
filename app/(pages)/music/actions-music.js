'use server'
import prisma from "@/prisma/prismaconnect";
import {join} from "path"
import {writeFile} from "fs/promises"
export async function action_music_add(data) {
  const file = data.get('file')
  const name = data.get('name')
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const path = join(process.cwd(), 'public', 'albums', file.name);
  await writeFile(path, buffer);
  console.log("PATH:::", path)

  await prisma.Album.create({
    data: {
      name: name,
      albumcover: file.name
    }
  })
}