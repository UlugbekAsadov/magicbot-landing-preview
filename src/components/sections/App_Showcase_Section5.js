"use client";

import { useState } from "react";
import { useLocaleContext } from "@/context/locale.context";
export default function App_Showcase_Section5() {
  const { translate } = useLocaleContext();
  return (
    <>
      <section className="section spdt">
        <div className="container">
          <div className="row flex-align-c mt-14">
            <div className="col-lg-6">
              <div className="">
                <div className="images layout-10">
                  <div className="inner">
                    <img
                      className="custom-image wow animate__animated   animate__fadeInLeft"
                      src="/assets/images/product-images/11_1.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pdr50 pdl80 lg-mt32">
                <div className="heading mb24">
                  <div className="heading-sub">
                    {translate("possibilities.ai_section.title")}
                  </div>
                  <h2 className="heading-title size-l">
                    {translate("possibilities.ai_section.heading")}
                  </h2>
                  <div className="heading-desc">
                    {translate("possibilities.ai_section.text")}
                  </div>
                </div>
                <div className="block-list layout-01 block-list-flex">
                  <ul>
                    <li>
                      <i className="las la-check" />
                      <span>{translate("possibilities.ai_section.adv_1")}</span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>{translate("possibilities.ai_section.adv_2")}</span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>{translate("possibilities.ai_section.adv_3")}</span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>{translate("possibilities.ai_section.adv_4")}</span>
                    </li>

                    <li>
                      <i className="las la-check" />
                      <span>{translate("possibilities.ai_section.adv_5")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
