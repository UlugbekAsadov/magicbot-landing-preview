"use client";

import { SurveyInput } from "@/components/survey/input";
import { SingleChoice } from "@/components/survey/single-choice";
import { useLocaleContext } from "@/context/locale.context";
import { Button } from "@headlessui/react";
import { ArrowLeftIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const survey = [
  {
    type: "single-choice",
    title: "form.do_you_sell_online.title",
    variants: ["form.do_you_sell_online.yes", "form.do_you_sell_online.no"],
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
  },
  {
    type: "single-choice",
    title: "form.do_you_know_magicbot.title",
    variants: [
      "form.do_you_know_magicbot.yes",
      "form.do_you_know_magicbot.not_really",
    ],
  },
  {
    type: "input",
    example: "",
    title: "form.store_name",
  },
  {
    type: "input",
    example: "",
    title: "form.full_name",
  },
  {
    type: "input",
    example: "",
    title: "form.phone_number",
  },
  {
    type: "input",
    example: "",
    title: "form.telegram_username",
  },
  {
    type: "input",
    example: "",
    title: "form.store_social_links",
  },
];

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const { translate } = useLocaleContext();
  const currentQuiz = survey[currentStep];

  const handleChangeStep = (value) => {
    if (currentStep + 1 !== survey.length) {
      setCurrentStep((prevState) => prevState + 1);
    } else {
      console.log("submitted");
      // Submit Form
    }
  };

  const getQuiz = () => {
    switch (currentQuiz.type) {
      case "single-choice":
        return (
          <SingleChoice
            variants={currentQuiz.variants}
            onChange={handleChangeStep}
          />
        );
      case "input":
        return (
          <SurveyInput
            title={currentQuiz.title}
            handleNextQuestion={handleChangeStep}
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
          <h1 className="text-2xl font-semibold text-white">
            {translate(currentQuiz.title)}
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
