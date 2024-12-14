"use client";

import { SurveyInput } from "@/components/survey/input";
import { SingleChoice } from "@/components/survey/single-choice";
import { useLocaleContext } from "@/context/locale.context";
import { Button } from "@headlessui/react";
import { ArrowLeftIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

const survey = [
  {
    type: "single-choice",
    title: "form.do_you_sell_online.title",
    variants: ["form.do_you_sell_online.yes", "form.do_you_sell_online.no"],
    field: "do_you_sell_online",
  },
  {
    type: "single-choice",
    title: "form.business_type.title",
    variants: [
      "form.business_type.clothes",
      "form.business_type.cosmetics",
      "form.business_type.parfums",
      "form.business_type.biologics",
      "form.business_type.electronics",
      "form.business_type.accessories",
      "form.business_type.others",
    ],
    field: "business_type",
  },
  {
    type: "single-choice",
    title: "form.do_you_know_magicbot.title",
    variants: [
      "form.do_you_know_magicbot.yes",
      "form.do_you_know_magicbot.not_really",
    ],
    field: "do_you_know_magicbot",
  },
  {
    type: "input",
    example: "",
    title: "form.store_name",
    field: "store_name",
  },
  {
    type: "input",
    example: "",
    title: "form.full_name",
    field: "full_name",
  },
  {
    type: "input",
    example: "",
    title: "form.phone_number",
    field: "phone_number",
  },
  {
    type: "input",
    example: "",
    title: "form.telegram_username",
    field: "telegram_username",
  },
  {
    type: "input",
    example: "",
    title: "form.store_social_links",
    field: "store_social_links",
  },
];

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const { translate, currentLang } = useLocaleContext();
  const currentQuiz = survey[currentStep];
  const router = useRouter();
  const [form, setForm] = useState({
    do_you_sell_online: "",
    business_type: "",
    do_you_know_magicbot: "",
    store_name: "",
    full_name: "",
    phone_number: "+998",
    telegram_username: "",
    store_social_links: "",
  });

  const handleChangeInput = (value) => {
    setForm((prevVal) => ({ ...prevVal, [currentQuiz.field]: value }));
  };

  const handleChangeStep = (value) => {
    if (currentStep + 1 !== survey.length) {
      setForm((prevVal) => ({ ...prevVal, [currentQuiz.field]: value }));
      setTimeout(() => {
        setCurrentStep((prevState) => prevState + 1);
      }, 500);
    } else {
      router.push(`/${currentLang}/lead/application/success`);
    }
  };

  const getQuiz = () => {
    switch (currentQuiz.type) {
      case "single-choice":
        return (
          <SingleChoice
            variants={currentQuiz.variants}
            onChange={handleChangeStep}
            value={form[currentQuiz.field]}
          />
        );
      case "input":
        return (
          <SurveyInput
            title={currentQuiz.title}
            handleNextQuestion={handleChangeStep}
            handleChangeInput={handleChangeInput}
            value={form[currentQuiz.field]}
          />
        );
    }
  };

  return (
    <div className="w-full p-4  bg-[#111111] min-h-screen flex flex-col border-gray-800">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white"
          asChild
        >
          <button
            disabled={currentStep === 0}
            onClick={() => setCurrentStep((prevVal) => prevVal - 1)}
            href="/onboarding/previous-step"
            className={twMerge("flex items-center text-white")}
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back
          </button>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <XCircleIcon />
        </Button>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center ">
        <div className="space-y-2  text-center ">
          {currentStep === 0 && (
            <h1 className="text-2xl font-semibold text-white mb-10">
              {translate("form.answer_these_questions")}
            </h1>
          )}
          <h1 className="text-2xl font-semibold text-white">
            {currentStep + 1}. {translate(currentQuiz.title)}
          </h1>

          {currentQuiz?.example ? (
            <p className="text-sm text-gray-400">
              {translate(currentQuiz?.example)}
            </p>
          ) : null}
        </div>

        <div className="space-y-4 container mt-3">{getQuiz()}</div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-center gap-2">
          {survey.map((_, idx) => (
            <button
              key={idx}
              disabled={idx > currentStep}
              onClick={() => setCurrentStep(idx)}
              className={twMerge(
                "w-12 h-1 rounded-full cursor-pointer",
                idx > currentStep ? "bg-gray-700" : "bg-white"
              )}
            />
          ))}
        </div>
        <div className="text-center text-sm text-gray-400">
          {translate("form.step")}: {currentStep + 1}/{survey.length}
        </div>
      </div>
    </div>
  );
}
