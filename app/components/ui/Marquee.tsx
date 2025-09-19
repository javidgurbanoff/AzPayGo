"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn("group flex overflow-hidden [--gap:1rem]", className)}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[--gap] animate-marquee",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 justify-around gap-[--gap] animate-marquee",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
