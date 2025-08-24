import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

export default function Navbar() {
  const joinUsRef = useRef();
  const logoTextRef = useRef();
  const logoRef = useRef();
  const navRef = useRef();
  const navHomeRef = useRef();
  const navAboutRef = useRef();
  const navContactRef = useRef();
  const navGetRef = useRef();
  const navResultsRef = useRef();
  const navFaqRef = useRef();

  useGSAP(() => {
    // Animate navbar container
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 0.3, ease: "power3.out" }
    );

    // Animate logo text
    gsap.fromTo(
      logoTextRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 0.5, ease: "power3.out" }
    );

    // Animate nav links
    [navHomeRef, navGetRef, navResultsRef, navAboutRef, navFaqRef, navContactRef].forEach((ref, i) => {
      gsap.fromTo(
        ref.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.7 + i * 0.2,
          ease: "power3.out",
        }
      );
    });

    // Animate Join Us button
    gsap.fromTo(
      joinUsRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 1.3, ease: "power3.out" }
    );

    // --- Hover animations ---
    const elJoin = joinUsRef.current;
    const navLinks = [navHomeRef.current, navGetRef.current, navResultsRef.current, navAboutRef.current, navFaqRef.current, navContactRef.current];
    const elLogo = logoTextRef.current;

    // Join Us hover
    const onJoinEnter = () => {
      gsap.to(elJoin, {
        scale: 1.1,
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        color: "#fff",
        borderRadius: "1.2rem",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onJoinLeave = () => {
      gsap.to(elJoin, {
        scale: 1,
        backgroundColor: "rgba(255,255,255,0.00)",
        backdropFilter: "blur(8px)",
        color: "#ccc",
        borderRadius: "1.5rem",
        duration: 0.4,
        ease: "power2.inOut",
      });
    };

    elJoin.addEventListener("mouseenter", onJoinEnter);
    elJoin.addEventListener("mouseleave", onJoinLeave);

    // Nav links hover (Home, About, Services)
    const onLinkEnter = (el) => {
      gsap.to(el, {
        color: "#fff",
        y: -5,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLinkLeave = (el) => {
      gsap.to(el, {
        color: "#ccc",
        y: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    };

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => onLinkEnter(link));
      link.addEventListener("mouseleave", () => onLinkLeave(link));
    });

    // Cleanup
    return () => {
      elJoin.removeEventListener("mouseenter", onJoinEnter);
      elJoin.removeEventListener("mouseleave", onJoinLeave);

      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => onLinkEnter(link));
        link.removeEventListener("mouseleave", () => onLinkLeave(link));
      });
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="cursor-none px-6 py-5 
                 bg-white/10 backdrop-blur-lg 
                 shadow-md border-b border-white/20 
                 flex items-center justify-between flex-row 
                 sticky top-0 z-50 rounded-b-xl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <h1 ref={logoRef}>
          <div
            ref={logoTextRef}
            className="text-white font-bold font-goldman text-3xl drop-shadow-lg"
          >
            Aesthetics Hub
          </div>
        </h1>

        {/* Nav links */}
        <div className="flex items-center space-x-10 ml-16">
          <a
            ref={navHomeRef}
            href="#"
            className="cursor-none text-lg text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            ref={navGetRef}
            href="#"
            className="cursor-none text-lg text-gray-300 hover:text-white transition-colors"
          >
           What You'll Learn?
          </a>
          <a
            ref={navResultsRef}
            href="#"
            className="cursor-none text-lg text-gray-300 hover:text-white transition-colors"
          >
           Results
          </a>
          <a
            ref={navAboutRef}
            href="#"
            className="cursor-none text-lg text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            ref={navFaqRef}
            href="#"
            className="cursor-none text-lg text-gray-300 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <a
            ref={navContactRef}
            href="#"
            className="cursor-none text-lg text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>

          {/* Join Us button */}
          <div
            ref={joinUsRef}
            className="ml-4 px-6 py-2 text-lg rounded-3xl flex items-center justify-center
                       text-white border border-white/40 
                       hover:bg-white/20 hover:rounded-xl transition-colors"
          >
            Join Us
          </div>
        </div>
      </div>
    </nav>
  );
}

