import LanguageDropdown from "@/components/elements/LanguageDropdown";
import { useEffect, useState } from "react";
import SwitchDarkLight from "@/components/elements/SwitchDarkLight";
import { useLocaleContext } from "@/context/locale.context";

export const HeaderTop = () => {
  const [colorMode, setColorMode] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    document.body.classList.toggle("sala-dark-scheme", colorMode === "light");
  }, []);
  const { translate } = useLocaleContext();

  return (
    <header
      id="top"
      className="border-b border-gray-50 font-sf hidden md:block z-40 relative header-color header-bottom"
    >
      <div className="max-w-[1600px] w-full mx-auto py-3 md:px-0 site-header">
        <div className="flex items-center justify-between container-fluid">
          <h2 className="header-left font-bold">+998 77 114 99 98</h2>
          <div className="flex justify-center items-center">
            <span className="text-green-600 font-bold text-sm">
              {translate("header.announce")}
            </span>
          </div>
          <div className="header-right flex items-center gap-3">
            <SwitchDarkLight />
          </div>
        </div>
      </div>
    </header>
  );
};
