import React from "react";
import EarthImg from "./assets/EarthImg.png";
import WaveBtnAnimation from "./WaveBtnAnimation.jsx";

const WhatYouWillGet = () => {
  return (
      <div className="flex items-center justify-center gap-10 p-10 bg-black text-white">
      {/* Left side (Image) */}
      <div className="flex-1 flex justify-center">
        <img src={EarthImg} alt="Earth" className="w-3/4 h-auto" />
      </div>

      {/* Right side (Text) */}
      <div className="flex-1 items-center justify-center">
        <h1 className="text-[3rem] leading-none font-bold mb-4">Global Private Network</h1>
        <div className="space-y-2 text-lg leading-normal">
          <p>• Network with Many of Students</p>
          <p>• Daily feedback, support & accountability</p>
          <p>• Transform alongside a like-minded brotherhood</p>
        </div>

        <div className="mt-8">
        <WaveBtnAnimation borderColor="white" waveFill="white" btnTextColor="white" afterAnimationTextColor="black"/>
           
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillGet;
