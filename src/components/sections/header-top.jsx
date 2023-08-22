import LanguageDropdown from "@/components/elements/LanguageDropdown";
import { useEffect, useState } from "react";
import SwitchDarkLight from "@/components/elements/SwitchDarkLight";

export const HeaderTop = () => {
  const [colorMode, setColorMode] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    document.body.classList.toggle("sala-dark-scheme", colorMode === "light");
  }, []);

  return (
    <header
      id="top"
      className="border-b border-gray-50 font-sf hidden md:block z-40 relative header-color header-bottom"
    >
      <div className="max-w-[1600px] w-full mx-auto py-3 md:px-0 site-header">
        <div className="flex items-center justify-between container-fluid">
          <h2 className="header-left font-bold">+998 77 003 44 04</h2>
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
