"use client";

import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";
import { useRef, useState, useEffect } from "react";
import "./styles/plans-section.css";
import { getOffsetTop } from "@/utils/funtions/calculate-distance";
import { useUtmContext } from "@/context/utm.context";
import { twMerge } from "tailwind-merge";

const months = [
  {
    title: "plans.one_month",
    duration: 1,
  },
  {
    title: "plans.six_month",
    duration: 6,
  },
  {
    title: "plans.year",
    duration: 12,
  },
];

export default function PlansSection() {
  const { translate } = useLocaleContext();
  const cardsContainerRef = useRef();
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(months[0].duration);

  const plans = [
    {
      name: "Start",
      desc: translate("plans.start.desc"),
      duration: translate("plans.per_month"),
      buttonText: translate("plans.start_now"),
      isPopular: false,
      price: {
        1: "199,000",
        6: "199,000",
        12: "199,000",
      },

      advantages: [
        translate("plans.start.clients_limit"),
        translate("plans.start.products_limit"),
        translate("plans.start.newsletters_limit"),
        translate("plans.start.employees_limit"),
        translate("plans.start.modules"),
      ],
    },
    {
      name: "Growth",
      desc: translate("plans.growth.desc"),
      duration: translate("plans.per_month"),
      buttonText: translate("plans.start_now"),
      isPopular: true,
      price: {
        1: "399,000",
        6: "339,000",
        12: "319,000",
      },
      discount: {
        title: translate("plans.popular"),
        amount: "",
      },
      advantages: [
        translate("plans.growth.clients_limit"),
        translate("plans.growth.products_limit"),
        translate("plans.growth.newsletters_limit"),
        translate("plans.growth.employees_limit"),
        translate("plans.growth.modules"),
        translate("plans.growth.ai"),
      ],
    },
    {
      name: "Plus",
      desc: translate("plans.plus.desc"),
      duration: translate("plans.per_month"),
      buttonText: translate("plans.start_now"),
      isPopular: false,
      price: {
        1: "799,000",
        6: "679,000",
        12: "639,000",
      },
      advantages: [
        translate("plans.plus.clients_limit"),
        translate("plans.plus.products_limit"),
        translate("plans.plus.newsletters_limit"),
        translate("plans.plus.employees_limit"),
        translate("plans.plus.modules"),
        translate("plans.plus.ai"),
      ],
    },
  ];

  useEffect(() => {
    const pricingTable = document.querySelector(".pricing-table");

    const handleMove = (e) => {
      const distance = getOffsetTop(pricingTable);
      const x = e.pageX - cardsContainerRef.current?.offsetLeft;
      const y = e.pageY - distance;
      setSelectedCard({ x, y });
    };

    document.body.addEventListener("pointermove", handleMove);
    return () => {
      document.body.removeEventListener("pointermove", handleMove);
    };
  }, []);

  const renderPlanCards = plans.map((plan, idx) => (
    <PlansCard key={idx} selectedDuration={selectedDuration} {...plan} />
  ));

  return (
    <div
      id="plans"
      className="section-pricing section has-icon icon-bottom-center header-color mb-20"
    >
      <div className="container">
        <div className=" heading align-center mt-16">
          <h2 className="text-center  heading-title size-l">
            {translate("plans.our_plans")}
          </h2>
        </div>
        <div className=" items-center gap-2 justify-center p-2 mb-4 border w-fit mx-auto rounded-xl grid grid-cols-3">
          {months.map((month) => (
            <div
              key={month.duration}
              className={twMerge(
                "py-2 px-3 cursor-pointer text-center",
                selectedDuration === month.duration &&
                  "background-grey rounded-xl"
              )}
              onClick={() => setSelectedDuration(month.duration)}
            >
              {translate(month.title)}
            </div>
          ))}
        </div>
        <div
          className="pricing-table layout-01 is-active"
          ref={cardsContainerRef}
        >
          <div className="row">{renderPlanCards}</div>

          {selectedCard && (
            <div
              className="row overlay__pricing"
              style={{
                "--x": `${selectedCard.x}px`,
                "--y": `${selectedCard.y}px`,
                opacity: selectedCard ? "1" : "0",
              }}
            >
              {[...Array(3)].map((_, i) => (
                <PlansCard
                  key={i}
                  {...Object.values(selectedCard)[0]}
                  buttonText={translate("plans.start_now")}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const PlansCard = ({
  name,
  desc,
  isPopular,
  discount,
  price,
  duration,
  advantages = [],
  buttonText,
  selectedDuration,
}) => {
  const { link } = useUtmContext();
  console.log({ price });

  return (
    <>
      <div className="col-lg-4 pricing-card-wrapper">
        <div className="pricing-box ">
          <div className="inner card">
            <div className="name  pricing__box-header">
              {name}
              {isPopular && (
                <span className="badge-popular">
                  {discount?.title}{" "}
                  <span className="font-bold">{discount?.amount}</span>
                </span>
              )}
            </div>
            <div className="price">
              <div className="number">{price?.[selectedDuration]}</div>{" "}
              {duration}
            </div>
            <div className="text-sm leading-6 text-gray-600">{desc}</div>
            <ul className="list">
              {advantages?.map((adv, idx) => (
                <li className="active" key={idx}>
                  {adv}
                </li>
              ))}
            </ul>
            <div className="button-wrap">
              <Link
                href={link}
                className=" card__cta cta"
                title="Начать сейчас"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
