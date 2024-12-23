import Link from "next/link";
import { useState } from "react";
import { navbarLinks } from "@/utils/mocks";
import { useLocaleContext } from "@/context/locale.context";
import LanguageDropdown from "@/components/elements/LanguageDropdown";

export default function CanvasMenu({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const { translate } = useLocaleContext();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="z-[1000]" onClick={toggleMenu}>
        <div className="icon cursor-pointer">
          <svg
            width="30px"
            height="14px"
            viewBox="0 0 30 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <g transform="translate(-50.000000, -33.000000)" fill="#111111">
                <g id="off-menu" transform="translate(50.000000, 28.000000)">
                  <g id="icon-menu" transform="translate(0.000000, 5.000000)">
                    <rect
                      id="Rectangle-1"
                      x={0}
                      y={0}
                      width={30}
                      height={3}
                      rx="1.5"
                    />
                    <rect
                      id="Rectangle-2"
                      x={0}
                      y={11}
                      width={20}
                      height={3}
                      rx="1.5"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className="icon cursor-pointer d-none">
          <svg
            width="30px"
            height="14px"
            viewBox="0 0 30 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <g transform="translate(-50.000000, -33.000000)" fill="#9f9f9f">
                <g id="off-menu" transform="translate(50.000000, 28.000000)">
                  <g id="icon-menu" transform="translate(0.000000, 5.000000)">
                    <rect
                      id="Rectangle-1"
                      x={0}
                      y={0}
                      width={30}
                      height={3}
                      rx="1.5"
                    />
                    <rect
                      id="Rectangle-2"
                      x={0}
                      y={11}
                      width={20}
                      height={3}
                      rx="1.5"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {isOpen && (
        <nav className="mobile-menu">
          <ul>
            {navbarLinks.map((link, index) => (
              <li
                key={index}
                className="wow animate__animated animate__fadeInLeft text-xl black-color"
                data-wow
                animate__animated-delay={`${link.id}s`}
                onClick={toggleMenu}
              >
                <Link href={`/${lang}${link.href}`}>
                  {translate(link.title)}
                </Link>
              </li>
            ))}
            <li
              className="wow animate__animated animate__fadeInLeft text-xl black-color"
              data-wow
              animate__animated-delay={`4s`}
              onClick={toggleMenu}
            >
              <Link href={"https://magicstore.uz/login"}>
                {translate("auth.login")}
              </Link>
            </li>
            <div className="wow animate__animated animate__fadeInLeft navbar__language-dropdown">
              <LanguageDropdown />
            </div>
          </ul>
        </nav>
      )}
    </>
  );
}
