import { useGSAP } from '@gsap/react';
import React from 'react'
import { useRef } from 'react'


const WaveBtnAnimation = ({borderColor, waveFill, btnTextColor, afterAnimationTextColor}) => {

  const btnRef = React.useRef(null);

  const handleCheck = () => {
     gsap.fromTo(
      btnRef.current,
      { scale: 1 },
      { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1, ease: "power2.out" }
    );
  }


  return (
    <button ref={btnRef} onClick={handleCheck} className={`font-poppins relative px-8 py-3 font-semibold text-${btnTextColor} border-2 border-${borderColor} overflow-hidden group rounded-full cursor-pointer`}>
      
      {/* Wave background */}
      <span className={`absolute inset-0 w-full h-full bg-${waveFill} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0`}></span>

      {/* Text layer 1 */}
      <span className='relative z-1 block transition-transform duration-500 ease-in-out group-hover:-translate-y-full'>
        Join Community
      </span>

      {/* Text layer 2 */}
      <span className={`absolute inset-0 flex items-center justify-center z-1 text-${afterAnimationTextColor} transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}>
        Let's Go!
      </span>
    </button>
  )
}

export default WaveBtnAnimation
