"use client";
import React from "react";
import { cn } from "./lib/utils";

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}) {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex min-h-screen w-full flex-col items-center justify-start bg-black text-white",
          className
        )}
        {...props}
      >
        {/* Aurora effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `pointer-events-none absolute -inset-[20px]
               [background-image:repeating-linear-gradient(120deg,#3b82f6_10%,#a5b4fc_20%,#93c5fd_30%,#ddd6fe_40%,#60a5fa_50%)]
               [background-size:200%_200%]
               animate-[auroraMove_15s_linear_infinite]
               opacity-60 blur-[80px]
               mix-blend-screen`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_20%,transparent_80%)]`
            )}
          ></div>
        </div>

        {/* Content inside aurora */}
        <div className="relative z-10 w-full">{children}</div>
      </div>

      {/* Aurora animation keyframes */}
      <style jsx>{`
        @keyframes auroraMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  );
}

