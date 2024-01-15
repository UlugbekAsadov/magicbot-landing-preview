"use client";

import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";
import { useRef, useState, useEffect } from "react";
import "./styles/plans-section.css"
import {getOffsetTop} from "@/utils/funtions/calculate-distance";

export default function PlansSection() {
  const { translate } = useLocaleContext();
  const cardsContainerRef = useRef();
  const [selectedCard, setSelectedCard] = useState(null);

  const plans = [
    {
      duration: "Basic",
      per_duration: translate("plans.per_month"),
      buttonText: translate("plans.start_now"),
      title: translate("plans.title"),
      isPopular: false,
      price: "199,000",
      advantages: [
        translate("plans.month.adv_1"),
        translate("plans.month.adv_2"),
        translate("plans.month.adv_3")
      ]
    },
    {
      duration: "Pro",
      per_duration: translate("plans.per_month"),
      buttonText: translate("plans.start_now"),
      title: translate("plans.title"),
      isPopular: true,
      price: "399,000",
      discount: {
        title: translate("plans.discount"),
        amount: ""
      },
      advantages: [
        translate("plans.annual.adv_1"),
        translate("plans.annual.adv_2"),
      ]
    },
    {
      duration: "Premium",
      per_duration: translate("plans.per_month"),
      buttonText: translate("plans.start_now"),
      title: translate("plans.title"),
      isPopular: false,
      price: "699,000",
      advantages: [
        translate("plans.annual.adv_1"),
        translate("plans.annual.adv_2"),
      ]
    }
  ]

  useEffect(() => {
    const pricingTable = document.querySelector(".pricing-table")

    const handleMove = (e) => {
      const distance = getOffsetTop(pricingTable)
      const x = e.pageX - cardsContainerRef.current?.offsetLeft;
      const y = e.pageY - distance;
      setSelectedCard({ x, y });
    };

    document.body.addEventListener("pointermove", handleMove);
    return () => {
      document.body.removeEventListener("pointermove", handleMove);
    };
  }, []);

  const renderPlanCards = plans.map((plan, idx) => <PlansCard key={idx} {...plan} />)

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
          <div className="pricing-table layout-01 is-active" ref={cardsContainerRef} >
            <div className="row" >
              {renderPlanCards}
            </div>

              {selectedCard && (
                  <div
                      className="row overlay__pricing"
                      style={{"--x": `${selectedCard.x}px`, "--y": `${selectedCard.y}px`, opacity: selectedCard ? '1' : '0'}}
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


export const PlansCard = ({ duration, isPopular, discount, price, per_duration, title, advantages = [], buttonText }) => {
  const { currentLang } = useLocaleContext();

  return (
   <>
     <div className="col-lg-4 pricing-card-wrapper">
       <div className="pricing-box ">
         <div className="inner card">
           <div className="name  pricing__box-header">
             {duration}
             {isPopular && (
                 <span className="badge-popular">
                  {discount?.title}{" "}
                   <span className="font-bold">{discount?.amount}</span>
                </span>
             )}
           </div>
           <div className="price">
             <div className="number">{price}</div>{" "}
             {per_duration}

           </div>
           <div className="desc">
             <p>{title}</p>
           </div>
           <ul className="list">
             {advantages?.map((adv, idx) => (
                 <li className="active" key={idx}>
                   {adv}
                 </li>
             ))}
           </ul>
           <div className="button-wrap">
             <Link
                 href={`/${currentLang}/contact`}
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
  )
}


