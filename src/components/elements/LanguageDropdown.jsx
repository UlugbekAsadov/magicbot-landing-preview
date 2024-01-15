"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const languages = [
  {
    id: 1,
    title: "O'zbekcha",
    locale: "uz",
    icon: "/assets/icons/uz-flag.svg",
  },
  {
    id: 2,
    title: "Русский",
    locale: "ru",
    icon: "/assets/icons/ru-flag.svg",
  },
];

export default function LanguageDropdown({ lang }) {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const langFromParams = window.location.pathname.split("/")[1];

  useEffect(() => {
    switch (langFromParams) {
      case "uz":
        setSelectedLanguage(languages[0]);
        break;
      case "ru":
        setSelectedLanguage(languages[1]);
        break;
    }
  }, [langFromParams]);

  const languageList = languages.map((language) => (
    <Link
      href={`/${language.locale}`}
      locale={language.locale}
      key={language.id}
    >
      <Listbox.Option
        className="relative cursor-pointer background-grey select-none py-2 pl-3"
        value={language}
      >
        {({ selected }) => (
          <Fragment>
            <div className="flex items-center">
              <img src={language.icon} alt={language.title} />
              <span
                className={`${
                  selected ? "text-blue-400" : " black-color opacity-50"
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
      href={`/${language.locale}`}
      locale={language.locale}
      key={language.id}
      className="language__item-mobile !h-10 !grid place-content-center !fs-10"
    >
      <p
        className={`flex items-center gap-1 uppercase ${
          langFromParams === language.locale ? "text-blue-400" : "black-color"
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
              <Listbox.Button className="relative background-grey-1 w-fit cursor-pointer py-2 pl-3 pr-8 text-left sm:text-sm rounded-full">
                <span className="flex items-center gap-1 uppercase text-blue-400 font-bold">
                  <img
                    src={selectedLanguage.icon}
                    alt={selectedLanguage.title}
                  />{" "}
                  {selectedLanguage.title}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-1 flex items-center pr-2">
                  <ChevronDownIcon
                    className={`h-5 w-5 black-color transition-all ${
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
                <Listbox.Options className="absolute z-50 mt-1 max-h-56 w-full header-color overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {languageList}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </Listbox>
      </div>
      <div
        className={`grid md:hidden border-t border-b border-t-b-color mt-7 grid-cols-2 py-2`}
      >
        {languageListForMobile}
      </div>
    </Fragment>
  );
}
