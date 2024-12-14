import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";

export default function HeaderRightSection({ lang }) {
  const { translate } = useLocaleContext();
  return (
    <>
      <div className=" flex flex-align-c flex-content-e">
        <div className="buttons">
          <Link href={`/${lang}/lead/application`} className="button fullfield">
            <i className="las la-headset" />
            <span>{translate("hero.button-text")}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
