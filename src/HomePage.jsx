import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar.jsx";
import { AuroraBackground } from "./AuroraBackground";
import WaveBtnAnimation from "./WaveBtnAnimation.jsx";
import Cursor from "./Cursor";

const HomePage = () => {
  const joinCommunity = useRef();
  const heading = useRef();

  useGSAP(() => {
    const el = joinCommunity.current;
    const title = heading.current;

    if (!el || !title) return;

    gsap.from(el, {
      y: -20,
      duration: 0.7,
      delay: 1.2,
      ease: "power3.out",
    });

    gsap.from(title, {
      y: -20,
      duration: 0.7,
      delay: 0.2,
      ease: "power3.out",
    });

    const onEnter = () => {
      gsap.to(el, {
        scale: 1.1,
        backgroundColor: "#f1f1f1",
        color: "#000",
        borderRadius: "1rem",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        scale: 1,
        backgroundColor: "#111",
        color: "#ccc",
        borderRadius: "1.5rem",
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
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
              className="text-white leading-[12vw] lg:leading-[6vw] tracking-[0.1px] text-[12vw] lg:text-[6vw] cursor-hover font-anton h900:text-[8vw] h900:leading-[8vw]  h900:text-center"
            >
              AESTHETICS <br /> MATTERS.
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
