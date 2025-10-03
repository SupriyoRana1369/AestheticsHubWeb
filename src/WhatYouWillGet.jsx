import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EarthImg from "./assets/EarthImg.png";
import WaveBtnAnimation from "./WaveBtnAnimation.jsx";

const WhatYouWillGet = () => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const bulletsRef = useRef();

  const headingWords = "Global Private Network".split(" ");
  const bulletItems = [
    "Network with Many of Students",
    "Daily feedback, support & accountability",
    "Transform alongside a like-minded brotherhood",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headingSpans = headingRef.current.querySelectorAll("span");
    const bullets = bulletsRef.current.querySelectorAll("p");

    // Hide all elements initially
    gsap.set([...headingSpans, ...bullets], { opacity: 0, y: 50 });

    // ScrollTrigger for the entire section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(headingSpans, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        });
        gsap.to(bullets, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.4,
        });
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      // Reduced gap on large screens to lg:gap-4 for minimum distance
      className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen w-full p-6 lg:p-16 bg-black text-white"
    >
      {/* Left side (Image) */}
      <div className="flex-1 flex justify-center items-center w-full mb-4 lg:mb-0">
        <img
          src={EarthImg}
          alt="Earth"
          // Increased size to max-w-4xl for a larger image
          className="w-[90%] max-w-4xl h-auto"
        />
      </div>

      {/* Right side (Text) */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-lg">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="mb-4 text-[2rem] lg:text-[3rem] font-bold leading-none"
        >
          {headingWords.map((word, i) => (
            <span key={i} className="inline-block mr-2">
              {word}
            </span>
          ))}
        </h1>

        {/* Bullet points */}
        <div
          ref={bulletsRef}
          className="space-y-2 text-base lg:text-lg leading-normal w-full"
        >
          {bulletItems.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}
        </div>

        <div className="mt-8 w-full flex justify-center lg:justify-start">
          <WaveBtnAnimation
            borderColor="white"
            waveFill="white"
            btnTextColor="white"
            afterAnimationTextColor="black"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillGet;