"use client";

import { useLocaleContext } from "@/context/locale.context";

export default function App_Showcase_Section4() {
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
                    {translate("possibilities.interface_section.title")}
                  </div>
                  <h2 className="heading-title size-l">
                    {translate("possibilities.interface_section.heading")}
                  </h2>
                  <div className="heading-desc">
                    {translate("possibilities.interface_section.text")}
                  </div>
                </div>
                <div className="block-list layout-01 block-list-flex">
                  <ul>
                    <li>
                      <i className="las la-check" />
                      <span>
                        {translate("possibilities.interface_section.adv_1")}
                      </span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>
                        {translate("possibilities.interface_section.adv_2")}
                      </span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>
                        {translate("possibilities.interface_section.adv_3")}
                      </span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>
                        {translate("possibilities.interface_section.adv_4")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 lg-order-1">
              <div className="pdl50">
                <div className="images layout-10">
                  <div className="inner -translate-x-7">
                    <img
                      className="custom-image-3  wow animate__animated animate__fadeInLeft"
                      src="/assets/images/product-images/Dark%20mode.png"
                      alt="Image"
                    />
                    <img
                      className="custom-image-4 wow animate__animated   animate__fadeInRight"
                      src="/assets/images/product-images/4.png"
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
