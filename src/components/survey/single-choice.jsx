import { useLocaleContext } from "@/context/locale.context";
import { twMerge } from "tailwind-merge";

export const SingleChoice = ({ variants, onChange, value }) => {
  const { translate } = useLocaleContext();
  return (
    <div className="grid md:grid-cols-2 gap-2">
      {variants.map((variant) => (
        <div
          key={variant}
          onClick={() => onChange(variant)}
          variant="outline"
          className={twMerge(
            "w-full rounded-xl  cursor-pointer  justify-between h-auto py-3 px-6",
            value === variant
              ? "bg-[#272a30] border-blue-600 hover:bg-[#212429] hover:border-gray-600"
              : "bg-[#272a30] border-gray-700 hover:bg-[#212429] hover:border-gray-600"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="text-left">
              <div className="font-medium text-white">{translate(variant)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
