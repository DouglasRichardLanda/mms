import React from 'react';
import {FaSpotify, FaApple, FaAmazon} from "react-icons/fa";
import Link from "next/link";
import {cookies} from "next/headers";
import Btn from "./btn"
import {cn} from "@/lib/utils";
import WrapperAlbum from "@/app/(pages)/music/album-wrapper";
import prisma from "@/prisma/prismaconnect";
import Song from "@/app/(pages)/music/song";

export default async function Album(props) {

  cookies();
  const isAdmin = cookies().get('session')?.value || '';

  const songs = await prisma.Song.findMany({
    where: {
      albumId: props.id
    }
  })
  return (
    <div className={`flex bg-red-800/70 rounded p-2 md:w-[70%] flex-col gap-5`}>
      <div className={cn(isAdmin ? 'flex duration-200 group top-5 right-[20%] gap-5' : 'hidden')}>
        <Btn className={cn(` px-5 py-2 bg-white text-black rounded shadow-md hover:bg-gray-200 duration-200`)} />
        <button className={cn(` px-5 py-2 bg-gray-300 text-black rounded shadow-md hover:cursor-not-allowed`)}>Change picture</button>
        <button className={cn(` px-5 py-2 bg-gray-300 text-black rounded shadow-md hover:cursor-not-allowed`)}>Add info</button>
        <button className={cn(` px-5 py-2 bg-gray-300 text-black rounded shadow-md hover:cursor-not-allowed`)}>Delete album</button>
        <WrapperAlbum id={props.id} />
      </div>
      <div className={`mb-5 sm:mb-0 sm:mr-5 flex flex-row gap-10`}>
        <img
          src={props.albumcover}
          alt="Picture of the entire album"
          className={`sm:max-h-[400px] max-w-[320px] sm:w-auto h-auto text-center`}
        />
        {/*<p className={`text-3xl w-full`}>Album</p>*/}
      </div>
      <div className={`mx-auto w-full`}>
        {songs.map((el, i) => (
          <Song
            isAdmin={isAdmin}
            key={i}
            songId={el.id}
            name={el.name}
            spotify={el.spotify}
            apple={el.apple}
            amazon={el.amazon}
            picture={el.picture}
            lyric={el.lyric}
          />
        ))}
      </div>
    </div>

    // <div className={`flex bg-red-800/70 rounded p-2 md:w-[70%] justify-between gap-5 flex-col w-fit relative`}>
    //   <div className={`mb-5 sm:mb-0 sm:mr-5 `}>
    //     <img
    //       src={props.albumcover}
    //       alt="Picture of the entire album"
    //       className={`sm:max-h-[400px] max-w-[320px] sm:w-auto h-auto text-center`}
    //     />
    //   </div>
    //   <div className={`w-full flex flex-col justify-center gap-2 self-center`}>
    //     {songs.map((el, i) => (
    //       <Song
    //         key={i}
    //         name={el.name}
    //         spotify={el.spotify}
    //         apple={el.apple}
    //         amazon={el.amazon}
    //         picture={el.picture}
    //       />
    //     ))}
    //   </div>
    //   <Btn className={cn(`hidden my-5 md:my-0`, isAdmin && 'flex fixed duration-200 group')} />
    //   <WrapperAlbum id={props.id} />
    // </div>
  );
}


// export async function Song(props) {
//   return (
//     <>
//       <div className={stylesel1}>
//         <div className={`flex gap-3 tracking-wider`}>
//           {props.picture && <img className={`w-8 h-8 object-cover`} src={props.picture} alt="Song's position in the album"/>}
//           <p className={`text-xl`}>{props.name}</p>
//         </div>
//         <div className={`flex gap-5`}>
//           <Link href={props.spotify}><FaSpotify className={`w-8 h-8 p-1`}/>
//           </Link> <Link href={props.apple}><FaApple className={`w-8 h-8 p-1`}/></Link>
//           <Link
//             href={props.amazon}><FaAmazon
//             className={`w-8 h-8 p-1`}/></Link>
//         </div>
//       </div>
//     </>
//   )
// }