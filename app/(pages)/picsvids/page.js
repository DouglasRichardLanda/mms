import React from 'react';
import Video from "./_components/video"
import VideoPlayer from "@/app/(pages)/picsvids/_components/video-player";

function Page(props) {

  return (
    <>
      <div className={`flex flex-wrap gap-16`}>
        <Video path={`https://www.youtube.com/watch?v=oEy0441CHFY`} />
      </div>
    </>
  );
}

export default Page;