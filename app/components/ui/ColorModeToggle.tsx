"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Sun, Moon } from "lucide-react";

export default function ColorModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <ToggleWrapper onClick={toggleTheme} $isDark={isDark}>
      <div className="circle">
        {isDark ? <Moon className="icon" /> : <Sun className="icon" />}
      </div>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "$isDark",
})<{ $isDark: boolean }>`
  width: 60px;
  height: 30px;
  border-radius: 9999px;
  background: ${({ $isDark }) => ($isDark ? "#0B1F3A" : "#f0c95f")};
  position: relative;
  cursor: pointer;
  transition: background 0.3s;

  .circle {
    width: 26px;
    height: 26px;
    background: ${({ $isDark }) => ($isDark ? "#fff" : "#FFD93B")};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: ${({ $isDark }) => ($isDark ? "32px" : "2px")};
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 16px;
      height: 16px;
      color: ${({ $isDark }) => ($isDark ? "#0B1F3A" : "#ffffff")};
    }
  }

  &:hover {
    opacity: 0.9;
  }
`;
