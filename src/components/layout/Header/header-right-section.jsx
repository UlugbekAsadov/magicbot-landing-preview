import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";

const HeaderRightSection = ({ lang }) => {
  const { translate } = useLocaleContext();
  return (
    <>
      <div className=" flex flex-align-c flex-content-e">
        <div className="buttons">
          <Link href={`/${lang}/contact`} className="button fullfield">
            <i className="las la-headset" />
            <span>{translate("navbar.free_demo")}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderRightSection;
