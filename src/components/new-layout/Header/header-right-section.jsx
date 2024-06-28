import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";
import { useUtmContext } from "@/context/utm.context";

export default function HeaderRightSection({ lang }) {
  const { translate } = useLocaleContext();
  const { link } = useUtmContext();
  return (
    <div className=" flex flex-align-center flex-content-end">
      <Link
        href={link}
        className="w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </svg>
      </Link>
    </div>
  );
}
