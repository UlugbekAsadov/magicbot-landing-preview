import { useEffect, useState } from "react";

export const DropDown = ({ dropdown, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectOption = (option) => {
    setSelectedOption(option);

    setIsOpen(false);
  };

  const renderOptions = dropdown.map((option, index) => (
    <div
      key={index}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
      onClick={onSelectOption.bind(null, option)}
    >
      {option.name}
    </div>
  ));

  return (
    <div
      className="relative w=full text-left"
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <button
          type="button"
          className="inline-flex w-full h-12 items-center justify-between gap-x-1.5 rounded-md bg-[#f8f9fc] px-3 py-2 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {selectedOption.name}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 w-full z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{renderOptions}</div>
        </div>
      )}
    </div>
  );
};
