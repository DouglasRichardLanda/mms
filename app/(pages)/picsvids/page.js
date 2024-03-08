import React from 'react';
import Video from "./_components/video"
import VideoPlayer from "@/app/(pages)/picsvids/_components/video-player";

function Page(props) {

  return (
    <>
      <div className={`flex flex-wrap gap-16`}>
        <Video path={`https://www.youtube.com/watch/CUuR9S7xriY?si=S6Bk1sfKj_HaWC2m`} />
      </div>
    </>
  );
}

export default Page;