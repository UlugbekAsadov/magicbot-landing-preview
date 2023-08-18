import Link from "next/link";
import { navbarLinks } from "@/utils/mocks";
import { useLocaleContext } from "@/context/locale.context";

export default function Menu({ lang }) {
  const { translate } = useLocaleContext();

  const renderNavLinks = navbarLinks.map((link) => (
    <li key={link.id} className="is-mega-menu">
      <Link href={`/${lang}${link.href}`} scroll={true}>
        {translate(link.title)}
      </Link>
    </li>
  ));

  return (
    <>
      <div className="main-menu">
        <div className="menu-action">
          <span className="item menu-back">
            <i className="las la-arrow-left" />
          </span>
          <span className="item menu-close">
            <i className="las la-times" />
          </span>
        </div>

        <ul>{renderNavLinks}</ul>
      </div>
    </>
  );
}
