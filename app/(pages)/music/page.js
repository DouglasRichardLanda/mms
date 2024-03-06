import React from 'react';
import Album from "./_components/album"

function Page(props) {
  return (
    <div className={`flex flex-col justify-center items-center w-full`}>
      <Album />
    </div>
  );
}

export default Page;