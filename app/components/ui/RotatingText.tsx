"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotatingTextProps {
  texts: (string | number)[];
  mainClassName?: string;
  staggerFrom?: "first" | "last";
  initial?: any;
  animate?: any;
  exit?: any;
  staggerDuration?: number;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  transition?: any;
  rotationInterval?: number;
  onNext?: () => void;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  mainClassName = "",
  staggerFrom = "last",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  splitLevelClassName = "",
  elementLevelClassName = "",
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
  onNext,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      if (onNext) onNext();
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval, onNext]);

  const currentText = String(texts[index] ?? "");

  return (
    <div className={`flex ${mainClassName}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={`flex ${splitLevelClassName}`}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
        >
          {currentText.split("").map((char, i) => (
            <span
              key={i}
              className={elementLevelClassName}
              style={{
                transitionDelay:
                  staggerFrom === "last"
                    ? `${(currentText.length - i) * staggerDuration}s`
                    : `${i * staggerDuration}s`,
              }}
            >
              {char}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
