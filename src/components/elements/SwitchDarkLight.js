import { useEffect, useState } from "react";

export default function SwitchDarkLight() {
  const [colorMode, setColorMode] = useState(
    localStorage.getItem("theme") || "dark",
  );
  useEffect(() => {
    document.body.classList.toggle("sala-dark-scheme", colorMode === "dark");
  }, []);

  const handleChangeTheme = (theme) => {
    document.body.classList.toggle("sala-dark-scheme", theme === "dark");
    setColorMode(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="flex items-center">
      {colorMode === "dark" ? (
        <button onClick={handleChangeTheme.bind(null, "light")}>
          <img src="./assets/icons/sun-icon.svg" alt="sun-icon" />
        </button>
      ) : (
        <button onClick={handleChangeTheme.bind(null, "dark")}>
          <img src="./assets/icons/moon-icon.svg" alt="sun-icon" />
        </button>
      )}
    </div>
  );
}
