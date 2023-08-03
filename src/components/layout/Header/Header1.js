import HeaderRight from "./HeaderRight";
import Logo from "./Logo";
import Menu from "./Menu";
import CanvasMenu from "./CanvasMenu";
import { useEffect, useState } from "react";

export default function Header({ headerClass }) {
  const [width, setWidth] = useState(window.innerWidth);
  const tabletScreenWidth = 768;
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header id="header" className={`site-header ${headerClass}`}>
        {width <= tabletScreenWidth ? <CanvasMenu /> : null}
        <div className="container-fluid">
          <div className="row flex-align-c inner">
            <div className="col-lg-3 col-6">
              <div className="header-left flex flex-align-c">
                <Logo />
              </div>
            </div>
            <div className="col-lg-6 col-0 text-center">
              <div className="header-center">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
