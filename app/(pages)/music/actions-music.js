'use server'
import prisma from "@/prisma/prismaconnect";
import {join} from "path"
import {writeFile} from "fs/promises"

export async function action_music_add(data) {
  const file = data.get('file')
  const name = data.get('name')
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // // Point to 'uploads' one directory above
  // let dir = path.join(process.cwd(), '..', 'uploads');
  // // Create directory if it doesn't exist.
  // if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  // // Set path of the image
  // file.path = path.join(dir, file.name);


  // const path = join(process.cwd(), 'public', 'albums', file.name);
  const path = join('albums', file.name);
  await writeFile(path, buffer);

  await prisma.Album.create({
    data: {
      name: name,
      albumcover: file.name
    }
  })
}