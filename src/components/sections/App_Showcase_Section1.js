"use client";

import { useLocaleContext } from "@/context/locale.context";
import Link from "next/link";

export default function App_Showcase_Section1() {
  const { translate } = useLocaleContext();
  return (
    <>
      <section className="section opt120 has-shape spdb mt-16">
        <div className="shape shape-yellow layout-01" />
        <div className="shape shape-yellow layout-02" />
        <div className="shape shape-red" />
        <div className="shape shape-blue" />
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading mb32">
                <h2 className="heading-title size-xl">
                  {translate("hero.paragraph")}
                </h2>
                <div className="heading-desc">{translate("hero.text")}</div>
              </div>
              <div className="button-wrap mb16">
                <Link
                  href="/contact-01"
                  className="button fullfield"
                  title="Buy now with just $50"
                >
                  {translate("hero.button-text")}
                </Link>
              </div>
            </div>
            <div className="col-lg-6 lg-order-1">
              <div className="images layout-02 ">
                <div className="inner">
                  <img
                    className="img05 wow animate__animated   animate__fadeInRight"
                    src="/assets/images/product-images/7.webp"
                    alt="Image"
                  />{" "}
                  <img
                    className="img06 wow animate__animated    animate__fadeInLeft"
                    src="/assets/images/product-images/4_1.webp"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
