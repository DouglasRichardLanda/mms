import React from 'react';
import Album from "./album"
import {cn} from "@/lib/utils";
import {cookies} from "next/headers";
import ToolbarMusic from "./toolbar-music";
import Wrapper from "./wrapper";
import {useMusicStore} from "@/_store/states";
import prisma from "@/prisma/prismaconnect";
import { list } from '@vercel/blob';

export default async function Page(props) {
  const response = await list();
  const images = response.blobs.reverse()

  cookies();
  const isAdmin = cookies().get("session")?.value || ''

  const allAlbums = await prisma.Album.findMany()


  return (
    <div className={`flex flex-col justify-center items-center w-full relative gap-2`}>

      {allAlbums.map((el, i) => (
        <Album key={i} id={el.id} albumcover={images[2].url} />
      ))}

      {isAdmin !== '' ? <ToolbarMusic fn={'music'} /> : null}
      <Wrapper />
    </div>
  );
}

