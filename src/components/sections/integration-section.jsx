"use client";

import { useLocaleContext } from "@/context/locale.context";
import Image from "next/image";
import { useThemeContext } from "@/context/theme.context";

export default function IntegrationSection() {
  const { translate } = useLocaleContext();
  const { colorMode } = useThemeContext();

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
                      src="/assets/images/product-images/9.png"
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
                    {translate("possibilities.integration.title")}
                  </div>
                  <h2 className="heading-title size-l">
                    {translate("possibilities.integration.heading")}
                  </h2>
                  <div className="heading-desc">
                    {translate("possibilities.integration.text")}
                  </div>
                </div>
                <div className="block-list layout-01 block-list-flex">
                  {colorMode === "light" ? (
                    <img
                      src="/assets/images/integrations-light.png"
                      alt="magicbot-integrations"
                    />
                  ) : (
                    <img
                      src="/assets/images/integrations-dark.png"
                      alt="magicbot-integrations"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
