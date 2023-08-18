"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocaleContext } from "@/context/locale.context";

export default function App_Showcase_Section9() {
  const { translate, currentLang } = useLocaleContext();
  return (
    <>
      <div
        id="plans"
        className="section-pricing section has-icon icon-bottom-center background-grey spdtb mb-20"
      >
        <div className="container">
          <div className="pricing-table layout-01 is-active">
            <div className="row">
              <div className="col-lg-6">
                <div className="pricing-box">
                  <div className="inner">
                    <div className="name">{translate("plans.monthly")}</div>
                    <div className="price">
                      <div className="number">299,000</div> /{" "}
                      {translate("plans.per_month")}
                    </div>
                    <div className="desc">
                      <p>{translate("plans.title")}</p>
                    </div>
                    <ul className="list">
                      <li className="active">
                        {translate("plans.month.adv_1")}
                      </li>
                      <li className="active">
                        {translate("plans.month.adv_2")}
                      </li>
                      <li className="active">
                        {translate("plans.month.adv_3")}
                      </li>
                    </ul>
                    <div className="button-wrap">
                      <Link
                        href={`/${currentLang}/contact`}
                        className="button fullfield"
                        title="Начать сейчас"
                      >
                        {translate("plans.start_now")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-box popular">
                  <div className="inner">
                    <div className="name">
                      ПРИ ОПЛАТЕ ЗА ГОД
                      <span className="badge-popular">
                        {translate("plans.discount")}{" "}
                        <span className="font-bold">20%</span>
                      </span>
                    </div>
                    <div className="price">
                      <div className="number">239,000</div> /{" "}
                      {translate("plans.per_month")}
                    </div>
                    <div className="desc">
                      <p>{translate("plans.title")}</p>
                    </div>
                    <ul className="list">
                      <li className="active">
                        {translate("plans.annual.adv_1")}
                      </li>
                      <li className="active">
                        {translate("plans.annual.adv_2")}
                      </li>
                    </ul>
                    <div className="button-wrap">
                      <Link
                        href={`/${currentLang}/contact`}
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
