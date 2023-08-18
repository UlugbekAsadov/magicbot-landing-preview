import Link from "next/link";

export default function HeaderRight({ lang }) {
  return (
    <>
      <div className=" flex flex-align-c flex-content-e">
        <div className="buttons">
          <Link href={`/${lang}/contact`} className="button fullfield">
            <i className="las la-headset" />
            <span>{"Бесплатное демо"}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
