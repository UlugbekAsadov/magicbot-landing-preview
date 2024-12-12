import { useLocaleContext } from "@/context/locale.context";
import { Button } from "@headlessui/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const SurveyInput = ({ title, value, handleNextQuestion }) => {
  const [inputValue, setInputValue] = useState(value);
  const [isError, setIsError] = useState(false);
  const { translate } = useLocaleContext();

  const moveNextQuestion = () => {
    if (!inputValue) {
      return setIsError(true);
    }

    handleNextQuestion(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    if (isError) {
      setIsError(false);
    }
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full">
      <input
        onChange={handleInputChange}
        value={inputValue}
        variant="outline"
        placeholder={translate(title)}
        className={twMerge(
          "w-full rounded-xl bg-[#272a30] text-white  border !border-gray-900  justify-between h-auto py-3 focus:outline outline-offset-1   outline-blue-600 px-6",
          isError && "outline-red-500  !border-red-500"
        )}
      />
      <Button
        onClick={moveNextQuestion}
        className="bg-blue-600 text-white w-full  rounded-full py-2 mt-3"
      >
        {translate("form.next")}
      </Button>
    </div>
  );
};
