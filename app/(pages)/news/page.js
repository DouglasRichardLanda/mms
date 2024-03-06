import React from 'react';

function Page(props) {
  return (
    <div className={`h-full flex flex-col gap-4 bg-white rounded text-black p-4 tracking-wider shadow-md shadow-white text-lg`}>
      <h1 className={`text-3xl`}>7 March 2024</h1>
      <p>Hurrah! After long lasting hard work we - Mad Man’s Spirit celebrate our online debut! To all lovers of rock,
        punk rock and simply music - be prepared for delicious sounding music, that we have recorded specially for
        you!
      </p>
      <p>
        Huge thanks to all, who supported us and collaborated with us in creation of tones and notes, sounds and
        pictures!
      </p>
      <p>
        We are very glad for having the opportunity to work with Grammy winners and grateful to Tom Lord-Alge
        for the unbelievable mix and Ted Jensen from Sterling Sound for great mastering of our sound!
      </p>
      <p>
        Today, dear rock and punk rock fans, we present to you our first song from the single, with total three tracks,
        called – “Pit Bull”!
        The video is out! It was made with help of AI. Its imperfection gives a kind of artistic touch to the pictures
        you will see! We had a lot of fun making it for you! So enjoy!
      </p>
      <p>
        Wanna some more? Stay tuned! The next surprises are already on their way!
      </p>
    </div>
  );
}

export default Page;