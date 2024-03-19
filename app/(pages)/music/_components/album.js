import React from 'react';
import { FaSpotify, FaApple, FaAmazon } from "react-icons/fa";
import Image from 'next/image'
import pitbullPic from "/public/debut/pitbulOhne.png"
import Link from "next/link";

function Album(props) {

  const stylesel1 = `sm:mb-2 flex w-full justify-between items-center h-fit sm:flex-row`

  return (
    <div className={`flex bg-red-800 p-2 md:w-[80%] justify-between sm:flex-row flex-col items-center w-fit`}>
      <div className={`mb-5 sm:mb-0 sm:mr-5`}>
        <Image
          src={pitbullPic}
          alt="Picture of the author"
          className={`sm:max-h-[200px] max-w-[320px] sm:w-auto h-auto text-center`}
        />
      </div>
      <div className={`w-full flex flex-col justify-center gap-2`}>
          <div className={stylesel1}>
            <div className={`flex gap-3 tracking-wider`}>
              <img className={`w-8 h-8 object-cover`} src="/debut/Dice1.png" alt=""/>
              <p className={`text-xl`}>Fallen Angel</p>
            </div>
            <div className={`flex gap-5`}>
              <Link href={`https://open.spotify.com/album/30M8PBi7bdWZnb3ZjYkrHV`}><FaSpotify className={`w-8 h-8 p-1`} /> </Link> <Link href={`http://itunes.apple.com/album/id/1734924779`}><FaApple className={`w-8 h-8 p-1`} /></Link> <Link href={'https://www.amazon.de/-/en/dp/B0CXJ1FD1D/ref=sr_1_7?__mk_de_DE=ÅMÅŽÕÑ&crid=23MLGXB77PMIM&dib=eyJ2IjoiMSJ9.mXVLIDe4kXCOZjh54tqJYtjfqGDrB270W55jUa9CHxPrBOFykzEiLyxbBPfDS1iP0wET0Go9L5zMy0WPo0IA6oOpc0lDYKXHDbYYknDzYZf4pcs8mbqt4Ql_dwNHC_iRiaFAZX04ylJlpS4VinxspVWq1lmtmszc1cXauC-FdM3SAJn3_LFfleldJZIrd__8ckIomrRsbiaQdjr2dZdwo6PyqORX2Qi5zX7qNTl5nqE.BLCjrZnDfd78kER4UbkDIs1Hnh42UhTRD67k1fjxzAI&dib_tag=se&keywords=Mad+Man%27s+Spirit&qid=1710861802&sprefix=mad+man%27s+spirit%2Caps%2C98&sr=8-7'}><FaAmazon className={`w-8 h-8 p-1`} /></Link>
            </div>
          </div>
          <div className={stylesel1}>
            <div className={`flex gap-3 tracking-wider`}>
              <img className={`w-8 h-8 object-cover`} src="/debut/Dice2.png" alt=""/>
              <p className={`text-xl`}>Lies</p>
            </div>
            <div className={`flex gap-5`}>
              <Link href={`https://open.spotify.com/album/3YlQEWlh3oo1Fmr4CkdW6j`}><FaSpotify className={`w-8 h-8 p-1`} /></Link> <Link href={`http://itunes.apple.com/album/id/1734924319`}><FaApple className={`w-8 h-8 p-1`} /> </Link> <Link href={`https://www.amazon.de/-/en/dp/B0CXHWVHVT/ref=sr_1_5?__mk_de_DE=ÅMÅŽÕÑ&crid=23MLGXB77PMIM&dib=eyJ2IjoiMSJ9.mXVLIDe4kXCOZjh54tqJYtjfqGDrB270W55jUa9CHxPrBOFykzEiLyxbBPfDS1iP0wET0Go9L5zMy0WPo0IA6oOpc0lDYKXHDbYYknDzYZc6bzFDKJGx4cQNc11m-ilAQucqQ_uNUZadPQFq-RMYFyr9TZz9CZFLRD8LKvIW5IUzG6V34vGn7c0d0OPJSpxhMU1AQHLKOd5ojemNFLtuCXdIZaYiYYO7fRA1RFaMC7g.F6ZjJ08NcXZCENukaYl1CsNHfxBoaqyoGtyuOW_zbIo&dib_tag=se&keywords=Mad+Man%27s+Spirit&qid=1710862018&sprefix=mad+man%27s+spirit%2Caps%2C98&sr=8-5`}><FaAmazon className={`w-8 h-8 p-1`} /></Link>
            </div>
          </div>
          <div className={stylesel1}>
            <div className={`flex gap-3 tracking-wider`}>
              <img className={`w-8 h-8 object-cover`} src="/debut/Dice3.png" alt=""/>
              <p className={`text-xl`}>Pitbull</p>
            </div>
            <div className={`flex gap-5`}>
              <Link href={`https://open.spotify.com/album/40cWXktPy9IUIOwk5Ik13j`} ><FaSpotify className={`w-8 h-8 p-1`} /></Link> <Link href={`http://itunes.apple.com/album/id/1735682518`}><FaApple className={`w-8 h-8 p-1`} /></Link> <Link href={`https://www.amazon.de/-/en/dp/B0CXXS77P2/ref=sr_1_10?__mk_de_DE=ÅMÅŽÕÑ&crid=23MLGXB77PMIM&dib=eyJ2IjoiMSJ9.mXVLIDe4kXCOZjh54tqJYtjfqGDrB270W55jUa9CHxPrBOFykzEiLyxbBPfDS1iP0wET0Go9L5zMy0WPo0IA6oOpc0lDYKXHDbYYknDzYZc6bzFDKJGx4cQNc11m-ilAOifF2OtOmf29cPLSaQWSwfU2xK75CEuvTsV7v-5dFZczG6V34vGn7c0d0OPJSpxhMU1AQHLKOd5ojemNFLtuCXdIZaYiYYO7fRA1RFaMC7g.u17llLSuf4cInPrSC5j3zZehikcUOUh3UqQZmkoIY2s&dib_tag=se&keywords=Mad+Man%27s+Spirit&qid=1710862148&sprefix=mad+man%27s+spirit%2Caps%2C98&sr=8-10`}><FaAmazon className={`w-8 h-8 p-1`} /></Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Album;