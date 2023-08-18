"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const languages = [
  {
    id: 1,
    title: "Uz",
    locale: "uz",
    icon: "/assets/icons/uz-flag.svg",
  },
  {
    id: 2,
    title: "Ru",
    locale: "ru",
    icon: "/assets/icons/ru-flag.svg",
  },
];

export default function LanguageDropdown({ lang }) {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    switch (lang) {
      case "uz":
        setSelectedLanguage(languages[0]);
        break;
      case "ru":
        setSelectedLanguage(languages[1]);
        break;
    }
  }, [lang]);

  const languageList = languages.map((language) => (
    <Link
      href={`/${language.locale}`}
      locale={language.locale}
      key={language.id}
    >
      <Listbox.Option
        className="relative cursor-pointer select-none py-2 pl-3"
        value={language}
      >
        {({ selected }) => (
          <Fragment>
            <div className="flex items-center">
              <img src={language.icon} alt={language.title} />
              <span
                className={`${
                  selected ? "text-blue-400" : "text-black opacity-50"
                } ml-1 truncate block font-bold uppercase`}
              >
                {language.title}
              </span>
            </div>
          </Fragment>
        )}
      </Listbox.Option>
    </Link>
  ));

  const languageListForMobile = languages.map((language) => (
    <Link
      href={`/${language.locale}/${window.location.pathname}`}
      locale={language.locale}
      key={language.id}
      className="language__item-mobile !h-10 !grid place-content-center !fs-10"
    >
      <p
        className={`flex items-center gap-1 uppercase ${
          lang === language.locale ? "text-blue-400" : "text-black"
        }  font-bold`}
        key={language.id}
      >
        <img src={language.icon} alt={language.title} /> {language.title}
      </p>
    </Link>
  ));

  return (
    <Fragment>
      <div className="hidden md:block z-50">
        <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
          {({ open }) => (
            <div className="relative font-sf ">
              <Listbox.Button className="relative w-full cursor-pointer bg-blue-100 py-2 pl-3 pr-8 text-left sm:text-sm rounded-full">
                <span className="flex items-center gap-1 uppercase text-blue-400 font-bold">
                  <img
                    src={selectedLanguage.icon}
                    alt={selectedLanguage.title}
                  />{" "}
                  {selectedLanguage.title}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-1 flex items-center pr-2">
                  <ChevronDownIcon
                    className={`h-5 w-5 text-black transition-all ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {languageList}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </Listbox>
      </div>
      <div
        className={`grid md:hidden border-t border-b border-zinc-100 mt-7 grid-cols-2 py-2`}
      >
        {languageListForMobile}
      </div>
    </Fragment>
  );
}
