import LanguageDropdown from "@/components/elements/LanguageDropdown";
import Image from "next/image";
import { useEffect, useState } from "react";
import SwitchDarkLight from "@/components/elements/SwitchDarkLight";

export const Top_Header = () => {
  const [colorMode, setColorMode] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    document.body.classList.toggle("sala-dark-scheme", colorMode === "light");
  }, []);

  const handleChangeTheme = (theme) => {
    document.body.classList.toggle("sala-dark-scheme", theme === "light");
    setColorMode(theme);
    localStorage.setItem("theme", theme);
  };
  return (
    <header
      id="top"
      className="border-b border-gray-50 font-sf hidden md:block z-40 relative header-color header-bottom"
    >
      <div className="max-w-[1600px] w-full mx-auto py-3 md:px-0 ">
        <div className="flex items-center justify-end container-fluid">
          <div className="header-right flex items-center gap-3">
            <SwitchDarkLight />
            <div>
              <LanguageDropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
