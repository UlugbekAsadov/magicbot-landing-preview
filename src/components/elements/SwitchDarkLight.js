"use client";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { useThemeContext } from "@/context/theme.context";

export default function SwitchDarkLight() {
  const { colorMode, handleChangeTheme } = useThemeContext();

  return (
    <div className="flex items-center">
      {colorMode === "dark" ? (
        <button onClick={handleChangeTheme.bind(null, "light")}>
          <img src="/assets/icons/sun-icon.svg" alt="sun-icon" />
        </button>
      ) : (
        <button onClick={handleChangeTheme.bind(null, "dark")}>
          <img src="/assets/icons/moon-icon.svg" alt="moon-icon" />
        </button>
      )}
    </div>
  );
}
