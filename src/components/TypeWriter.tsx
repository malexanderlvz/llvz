"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delayTime: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delayTime,
  className,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delayTime);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delayTime, text]);

  return <div className={cn("", className)}>{currentText}</div>;
};

export default Typewriter;
