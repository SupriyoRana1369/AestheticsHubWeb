import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import WaveBtnAnimation from "./WaveBtnAnimation.jsx";
import "./index.css";

export default function NavMenu({ isOpen }) {
  const menuRef = useRef(null);
  const homeRef = useRef(null);
  const whatToGetRef = useRef(null);  
  const transformationsRef = useRef(null);
  const aboutRef = useRef(null);
  const discordRef = useRef(null);
  const contactRef = useRef(null);
  const waveBtnRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current.querySelectorAll(".menu-item"),
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
    if (isOpen) {
          gsap.fromTo(waveBtnRef.current, {
        x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: 1.2,
          ease: "power3.out",
        }
      )
    }
  }, [isOpen]);

  const itemClass =
    "menu-item text-black font-bold font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer cursor-hover text-center";

  return (
    <>

      <div
        ref={menuRef}
        className="fixed w-[100vw] h-[100vh] bg-[#f5eeda] shadow-md border border-white/20 
                   px-6 z-[998] leading-[2rem] flex flex-col justify-center items-center 
                   gap-4 sm:gap-6 md:gap-8 text-center"
      >
        <h1
          ref={homeRef}
          className={itemClass}
          onMouseEnter={() =>
            gsap.to(homeRef.current, { y: -10, duration: 0.2, ease: "power2.out" })
          }
          onMouseLeave={() =>
            gsap.to(homeRef.current, { y: 0, duration: 0.2, ease: "power2.out" })
          }
        >
          Home
        </h1>

        <h1
          ref={whatToGetRef}
          className={itemClass}
          onMouseEnter={() =>
            gsap.to(whatToGetRef.current, { y: -10, duration: 0.2, ease: "power2.out" })
          }
          onMouseLeave={() =>
            gsap.to(whatToGetRef.current, { y: 0, duration: 0.2, ease: "power2.out" })
          }
        >
          What You'll Get ?
        </h1>

        <h1
          ref={transformationsRef}
          className={itemClass}
          onMouseEnter={() =>
            gsap.to(transformationsRef.current, { y: -10, duration: 0.2, ease: "power2.out" })
          }
          onMouseLeave={() =>
            gsap.to(transformationsRef.current, { y: 0, duration: 0.2, ease: "power2.out" })
          }
        >
          Transformations
        </h1>

        <h1
          ref={aboutRef}
          className={itemClass}
          onMouseEnter={() =>
            gsap.to(aboutRef.current, { y: -10, duration: 0.2, ease: "power2.out" })
          }
          onMouseLeave={() =>
            gsap.to(aboutRef.current, { y: 0, duration: 0.2, ease: "power2.out" })
          }
        >
          About
        </h1>

        <h1
          ref={discordRef}
          className={itemClass}
          onMouseEnter={() =>
            gsap.to(discordRef.current, { y: -10, duration: 0.2, ease: "power2.out" })
          }
          onMouseLeave={() =>
            gsap.to(discordRef.current, { y: 0, duration: 0.2, ease: "power2.out" })
          }
        >
          Discord
        </h1>

        <h1
          ref={contactRef}
          className={itemClass}
          onMouseEnter={() =>
            gsap.to(contactRef.current, { y: -10, duration: 0.2, ease: "power2.out" })
          }
          onMouseLeave={() =>
            gsap.to(contactRef.current, { y: 0, duration: 0.2, ease: "power2.out" })
          }
        >
          Contact
        </h1>
        <WaveBtnAnimation ref={waveBtnRef} borderColor="black" waveFill="black" btnTextColor="black" afterAnimationTextColor="white" />
      </div>
    </>
  );
}
