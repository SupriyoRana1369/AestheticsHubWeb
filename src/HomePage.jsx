import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from './Navbar.jsx';
import { AuroraBackground } from "./AuroraBackground";

const HomePage = () => {
  const joinCommunity = useRef();
  const heading = useRef();

  useGSAP(() => {
    const el = joinCommunity.current;
    const title = heading.current;

    // Animations
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

    // Hover Animations
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

    // Cleanup on unmount
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <AuroraBackground>
      <Navbar />
      <div className="w-screen min-h-screen flex flex-col items-center pt-4 overflow-x-hidden overflow-y-auto px-[5vw]">
        <div
          ref={heading}
          className="text-white font-bold text-[6.5vw] no-wrap cursor-hover"
        >
          AESTHETICS MATTERS.
        </div>

        <div className="flex flex-col justify-center align-center w-full mt-4">
          <div className="bg-white text-black px-[40vw] py-[20vw] m-4 cursor-hover">
            video
          </div>
          <div className="flex justify-center">
            <div
              ref={joinCommunity}
              className="bg-black text-white border font-semibold border-white rounded-3xl m-4 px-12 py-4 w-fit flex justify-center items-center cursor-hover"
            >
              Join Community
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default HomePage;
