import React from 'react';
import Video from "./_components/video"

export default async function Page(props) {

  return (
    <>
      <div className={`flex flex-wrap gap-16`}>
        <Video path={`https://www.youtube.com/watch?v=oEy0441CHFY`} picture={'/PitBullThumbnail.jpg'} />
      </div>
    </>
  );
}

