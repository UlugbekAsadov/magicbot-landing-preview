import { useLocaleContext } from "@/context/locale.context";
import { Button } from "@headlessui/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Loader } from "../loader";

export const SurveyInput = ({
  title,
  value,
  handleNextQuestion,
  handleChangeInput,
}) => {
  const [isError, setIsError] = useState(false);
  const { translate } = useLocaleContext();
  const [isLoading, setIsLoading] = useState(false);

  const moveNextQuestion = () => {
    setIsLoading(true);
    if (!value) {
      return setIsError(true);
    }

    handleNextQuestion(value);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="w-full">
      <input
        onChange={(e) => handleChangeInput(e.target.value)}
        value={value}
        variant="outline"
        placeholder={translate(title)}
        className={twMerge(
          "w-full rounded-xl bg-[#272a30] text-white  border !border-gray-900  justify-between h-auto py-3 focus:outline outline-offset-1   outline-blue-600 px-6",
          isError && "outline-red-500  !border-red-500"
        )}
      />
      <Button
        isLoading={isLoading}
        onClick={moveNextQuestion}
        className="bg-blue-600 text-white w-full  rounded-full py-2 mt-3"
      >
        {isLoading ? <Loader /> : translate("form.next")}
      </Button>
    </div>
  );
};
