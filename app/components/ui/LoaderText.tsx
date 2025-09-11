"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const words = ["Rahat", "Asan", "Sürətli"];
const scanDuration = 2500;

const LoaderText = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % words.length);
    }, scanDuration);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledWrapper>
      <div className="loader">
        <span>{words[current]}</span>
      </div>
    </StyledWrapper>
  );
};

const scan = keyframes`
  0% { top: 0px; }
  50% { top: 54px; }
  100% { top: 0px; }
`;

const cut = keyframes`
  0%, 75%, 100% { clip-path: inset(0 0 0 0); }
  25% { clip-path: inset(100% 0 0 0); }
  50% { clip-path: inset(0 0 100% 0); }
`;

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 60px;
    overflow: hidden;
  }

  .loader span {
    display: block;
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 60px;
    font-weight: 700;
    color: #0b1f3a;
    animation: ${cut} ${scanDuration}ms linear infinite;
    z-index: 2;
  }

  .loader::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 6px;
    border-radius: 4px;
    background-color: #ff828291;
    filter: blur(10px);
    animation: ${scan} ${scanDuration}ms linear infinite;
    left: 0;
    z-index: 0;
  }

  .loader::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    border-radius: 4px;
    background-color: #ff8282;
    animation: ${scan} ${scanDuration}ms linear infinite;
    left: 0;
    z-index: 1;
    filter: opacity(0.9);
  }
`;

export default LoaderText;
