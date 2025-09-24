import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import NavMenu from "./NavMenu";

export default function Navbar() {
  const topLine = useRef(null);
  const middleLine = useRef(null);
  const bottomLine = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const logo = useRef(null);

  // Animate logo words on mount
  useEffect(() => {
    if (!logo.current) return;

    // Split into words and put each on its own line
    const text = logo.current.innerText;
    logo.current.innerHTML = text
      .split(" ")
      .map(
        (word) =>
          `<span style="display:inline-block; opacity:0; margin-bottom:0.4rem;">${word}</span>`
      )
      .join("");

    gsap.fromTo(
      logo.current.querySelectorAll("span"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3, // delay between words
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      // Animate hamburger → X
      gsap.to(topLine.current, { rotation: 45, y: 8, duration: 0.3 });
      gsap.to(middleLine.current, { opacity: 0, duration: 0.3 });
      gsap.to(bottomLine.current, { rotation: -45, y: -8, duration: 0.3 });

      // Animate menu in
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      // Animate hamburger back
      gsap.to(topLine.current, { rotation: 0, y: 0, duration: 0.3 });
      gsap.to(middleLine.current, { opacity: 1, duration: 0.3 });
      gsap.to(bottomLine.current, { rotation: 0, y: 0, duration: 0.3 });

      // Animate menu out
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="px-6 md:px-20 lg:px-40 py-5 
                   bg-white/10 backdrop-blur-lg 
                   shadow-md border-b border-white/20 
                   flex items-center justify-between flex-row 
                   sticky top-0 z-50 rounded-b-xl gap-6 mb-8"
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <h1>
            <div
              ref={logo}
              className="text-white font-bold font-goldman text-3xl drop-shadow-lg leading-tight"
            >
              Aesthetics Hub
            </div>
          </h1>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-20 h-20 space-y-2 border border-[#f5eeda] rounded-full cursor-pointer"
          >
            <span ref={topLine} className="block h-[2px] w-7 bg-white rounded-full"></span>
            <span ref={middleLine} className="block h-[2px] w-7 bg-white rounded-full"></span>
            <span ref={bottomLine} className="block h-[2px] w-7 bg-white rounded-full"></span>
          </button>
        </div>
      </nav>

      {/* NavMenu always mounted but offscreen */}
      <div ref={menuRef} className="fixed top-[122px] left-0 w-screen h-screen z-[100] translate-x-full">
        <NavMenu isOpen={isOpen} />
      </div>
    </>
  );
}
