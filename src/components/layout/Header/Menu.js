import Link from "next/link";
import { navbarLinks } from "@/utils/mocks";
import { useLocaleContext } from "@/context/locale.context";

export default function Menu() {
  const { translate } = useLocaleContext();

  const rederNavLinks = navbarLinks.map((link) => (
    <li key={link.id} className="is-mega-menu">
      <Link href={link.href} scroll={false}>
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

        <ul>{rederNavLinks}</ul>
      </div>
    </>
  );
}
