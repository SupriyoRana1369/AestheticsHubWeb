import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleEnter = (e) => {
      if (e.target.classList.contains("cursor-hover")) {
        gsap.to(cursor, { scale: 3, duration: 0.3, ease: "power3.out" });
      }
    };

    const handleLeave = (e) => {
      if (e.target.classList.contains("cursor-hover")) {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleEnter, true);
    document.addEventListener("mouseleave", handleLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleEnter, true);
      document.removeEventListener("mouseleave", handleLeave, true);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
    />
  );
};

export default Cursor;
