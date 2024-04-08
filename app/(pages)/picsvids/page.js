import React from 'react';
import Video from "./video"
import ToolbarVids from "./toolbar-vids"
import {cookies} from "next/headers";
import Wrapper from "./wrapper";
import { list } from '@vercel/blob';
import prisma from "@/prisma/prismaconnect";

export default async function Page(props) {

  const response = await list();
  const filtered = response.blobs.filter((el) => {
    return el.pathname.includes('vids') && el.size !== 0
  })

  const videos = await prisma.vids.findMany();

  cookies();
  const isAdmin = cookies().get("session")?.value || ''

  return (
    <>
      <div className={`flex flex-wrap gap-16`}>

        {videos.reverse().map((el, i) => (
          <Video
            key={i}
            path={el.link}
            picture={filtered[i].url}
            name={el.title}
          />
        ))}

        {isAdmin !== '' ? <ToolbarVids fn={'vids'} /> : null}
        <Wrapper />
      </div>
    </>
  );
}

