import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar.jsx";
import { AuroraBackground } from "./AuroraBackground";
import WaveBtnAnimation from "./WaveBtnAnimation.jsx";
import Cursor from "./Cursor";

const HomePage = () => {
  const heading = useRef();

  useGSAP(() => {
    const title = heading.current;
    if (!title) return;

    // Animate heading text letters (slide up + fade in)
    gsap.fromTo(
      title.querySelectorAll("span"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <AuroraBackground>
      <Cursor />
      <Navbar />

      {/* Parent container */}
      <div className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center px-[5vw] gap-8 lg:gap-4 mt-[-4rem] h900:flex-col h900:justify-center h900:mt-0">
        
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:w-[45%] lg:mt-[-30rem] h900:mt-0 h900:items-center">
          <div className="flex flex-col gap-5">
            <div
              ref={heading}
              className="text-white leading-[12vw] lg:leading-[6vw] tracking-[0.1px] text-[12vw] lg:text-[6vw] cursor-hover font-anton h900:text-[8vw] h900:leading-[8vw] h900:text-center"
            >
              {"AESTHETICS".split("").map((char, index) => (
                <span key={index} className="inline-block opacity-0">
                  {char}
                </span>
              ))}
              <br />
              {"MATTERS.".split("").map((char, index) => (
                <span key={index} className="inline-block opacity-0">
                  {char}
                </span>
              ))}
            </div>
          </div>
          <WaveBtnAnimation 
            borderColor="white" 
            waveFill="white" 
            btnTextColor="white" 
            afterAnimationTextColor="black" 
          />
        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-start lg:w-[45%] h900:justify-center">
          <div className="bg-white text-black aspect-video w-[80vw] lg:w-[100%] cursor-hover flex items-center justify-center lg:mt-[4rem] h900:mt-0">
            video
          </div>
        </div>

      </div>
    </AuroraBackground>
  );
};

export default HomePage;
