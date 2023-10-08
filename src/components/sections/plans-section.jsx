"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocaleContext } from "@/context/locale.context";

export default function PlansSection() {
  const { translate, currentLang } = useLocaleContext();
  return (
    <>
      <div
        id="plans"
        className="section-pricing section has-icon icon-bottom-center header-color spdtb mb-20"
      >
        <div className="container">
          <div className=" heading align-center mt-16">
            <h2 className="text-center  heading-title size-l">
              {translate("plans.our_plans")}
            </h2>
          </div>
          <div className="pricing-table layout-01 is-active">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="pricing-box">
                  <div className="inner background-grey">
                    <div className="name ">{translate("plans.monthly")}</div>
                    <div className="price">
                      <div className="number">399,000</div> /{" "}
                      {translate("plans.per_month")}
                    </div>
                    <ul className="list">
                      <li className="active">
                        {translate("plans.month.adv_1")}
                      </li>
                      <li className="active">
                        {translate("plans.month.adv_2")}
                      </li>
                    </ul>
                    <div className="button-wrap">
                      <Link
                        href={`https://magicstore.uz/${currentLang}/register`}
                        className="button fullfield"
                        title="Начать сейчас"
                      >
                        {translate("plans.start_now")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="pricing-box popular">
                  <div className="inner background-grey">
                    <div className="name  pricing__box-header">
                      {translate("plans.yearly")}
                      <span className="badge-popular">
                        {translate("plans.discount")}{" "}
                        <span className="font-bold">20%</span>
                      </span>
                    </div>
                    <div className="price">
                      <div className="number">319,000</div> /{" "}
                      {translate("plans.per_month")}
                    </div>
                    <ul className="list">
                      <li className="active">
                        {translate("plans.annual.adv_1")}
                      </li>
                      <li className="active">
                        {translate("plans.annual.adv_2")}
                      </li>
                      <li className="active">
                        {translate("plans.month.adv_3")}
                      </li>
                    </ul>
                    <div className="button-wrap">
                      <Link
                        href={`https://magicstore.uz/${currentLang}/register`}
                        className="button fullfield"
                        title="Начать сейчас"
                      >
                        {translate("plans.start_now")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
