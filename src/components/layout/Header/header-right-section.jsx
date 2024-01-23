import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";

export default function HeaderRightSection({ lang }) {
  const { translate } = useLocaleContext();
  return (
    <>
      <div className=" flex flex-align-c flex-content-e">
        <div className="buttons">
          <Link href={`https://magicstore.uz/${lang}/register?utm_source=landing&utm_medium=header&utm_campaign=landing`} className="button fullfield">
            <i className="las la-headset" />
            <span>{translate("header.free_demo")}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
