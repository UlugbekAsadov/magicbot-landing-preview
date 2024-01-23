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
      name: "Basic",
      duration: translate("plans.per_month"),
      buttonText: translate("plans.start_now"),
      isPopular: false,
      price: "199,000",
      advantages: [
        translate("plans.basic.clients_limit"),
        translate("plans.basic.products_limit"),
        translate("plans.basic.newsletters_limit"),
        translate("plans.basic.employees_limit"),
        translate("plans.basic.modules"),
      ]
    },
    {
      name: "Pro",
      duration: translate("plans.per_month"),
      buttonText: translate("plans.start_now"),
      isPopular: true,
      price: "399,000",
      discount: {
        title: translate("plans.popular"),
        amount: ""
      },
      advantages: [
        translate("plans.pro.clients_limit"),
        translate("plans.pro.products_limit"),
        translate("plans.pro.newsletters_limit"),
        translate("plans.pro.employees_limit"),
        translate("plans.pro.modules"),
        translate("plans.pro.ai"),
      ]
    },
    {
      name: "Premium",
      duration: translate("plans.per_month"),
      buttonText: translate("plans.start_now"),
      isPopular: false,
      price: "799,000",
      advantages: [
        translate("plans.premium.clients_limit"),
        translate("plans.premium.products_limit"),
        translate("plans.premium.newsletters_limit"),
        translate("plans.premium.employees_limit"),
        translate("plans.premium.modules"),
        translate("plans.premium.ai"),
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


export const PlansCard = ({ name, isPopular, discount, price, duration, advantages = [], buttonText }) => {
  const { currentLang } = useLocaleContext();

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
             <div className="number">{price}</div>{" "}
             {duration}
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
                 href={`https://magicstore.uz/${currentLang}/register?utm_source=landing&utm_medium=plan&utm_campaign=plans&plan=${name}`}
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


