import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const LiquidButton = forwardRef(
  ({ children = "Button", variant = "default", size = "default", className = "", ...props }, ref) => {

    // Tailwind variant/colors
    const variants = {
      default: "bg-black text-white hover:bg-white hover:text-black",
      outline: "border border-black text-black hover:bg-black hover:text-white",
      secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    };

    // Tailwind sizes
    const sizes = {
      default: "px-6 py-3",
      sm: "px-4 py-2 text-sm",
      lg: "px-8 py-4 text-lg",
      icon: "h-10 w-10 p-0",
    };

    return (
      <>
      <div className="relative inline-block">
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        className={`relative rounded-full hover:rounded-3xl transition-all  hover:scale-105 font-semibold cursor-pointer outline-none disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
      <div className={` bg-white ${variants[variant]} ${sizes[size]} `}></div>
      </div>
      </>
    );
  }
);

export default LiquidButton;
