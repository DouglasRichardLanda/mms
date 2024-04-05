import React from 'react';
import Album from "./album"
import {cn} from "@/lib/utils";
import {cookies} from "next/headers";
import ToolbarMusic from "./toolbar-music";
import Wrapper from "./wrapper";
import {useMusicStore} from "@/_store/states";
import prisma from "@/prisma/prismaconnect";

export default async function Page(props) {

  cookies();
  const isAdmin = cookies().get("session")?.value || ''

  const allAlbums = await prisma.Album.findMany()

  return (
    <div className={`flex flex-col justify-center items-center w-full relative gap-2`}>

      {allAlbums.map((el, i) => (
        <Album key={i} id={el.id} albumcover={`/albums/${el.albumcover}`} />
      ))}

      {isAdmin !== '' ? <ToolbarMusic fn={'music'} /> : null}
      <Wrapper />
    </div>
  );
}

