"use client";

import { useLocaleContext } from "@/context/locale.context";

export default function CrmSection() {
  const { translate } = useLocaleContext();
  return (
    <>
      <section className="section spdt">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 lg-order-2">
              <div className="pdr50 pdl80 lg-mt32">
                <div className="heading mb24">
                  <div className="heading-sub">
                    {translate("possibilities.crm_section.title")}
                  </div>
                  <h2 className="heading-title size-l">
                    {translate("possibilities.crm_section.heading")}
                  </h2>
                  <div className="heading-desc">
                    {translate("possibilities.crm_section.text")}
                  </div>
                </div>
                <div className="block-list layout-01 block-list-flex">
                  <ul>
                    <li>
                      <i className="las la-check" />
                      <span>
                        {" "}
                        {translate("possibilities.crm_section.adv_1")}
                      </span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>
                        {" "}
                        {translate("possibilities.crm_section.adv_2")}
                      </span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>
                        {" "}
                        {translate("possibilities.crm_section.adv_3")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 lg-order-1 flex items-center">
              <div className="pdl50">
                <div className="images layout-10">
                  <div className="inner -translate-x-7">
                    <img
                      className="  wow animate__animated   animate__fadeInLeft"
                      src="/assets/images/product-images/27.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
