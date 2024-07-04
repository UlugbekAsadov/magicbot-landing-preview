import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";
import {useUtmContext} from "@/context/utm.context";

export default function HeaderRightSection({ lang }) {
  const { translate } = useLocaleContext();
  const { link } = useUtmContext();
  return (
    <>
      <div className=" flex flex-align-c flex-content-e">
        <div className="buttons">
          <Link href="/lead/#lead-section" className="button fullfield">
            <i className="las la-headset" />
            <span>{translate("header.free_demo")}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
