import Link from "next/link";

export default function Menu() {
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

        <ul>
          <li className="is-mega-menu">
            <Link href="/">Demos</Link>
          </li>
          <li className="is-mega-menu">
            <Link href="/">Pages</Link>
          </li>
          <li className="is-mega-menu">
            <Link href="/">Portfolio</Link>
          </li>
          <li className="is-mega-menu">
            <Link href="/">Blog</Link>
          </li>
          <li className="is-normal-menu">
            <Link href="/">Shop</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
