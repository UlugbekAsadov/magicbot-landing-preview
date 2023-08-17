import Link from "next/link";

export default function HeaderRight() {
  return (
    <>
      <div className="header-right flex flex-align-c flex-content-e">
        <div className="buttons">
          <Link href="/contact" className="button fullfield">
            <i className="las la-headset" />
            <span>{"Бесплатное демо"}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
