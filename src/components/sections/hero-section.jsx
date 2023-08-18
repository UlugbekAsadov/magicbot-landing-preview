"use client";

import { useLocaleContext } from "@/context/locale.context";
import Link from "next/link";

export default function HeroSection() {
  const { translate, currentLang } = useLocaleContext();

  return (
    <>
      <section id={"top"} className="section opt120 has-shape spdb">
        <div className="shape shape-yellow layout-01" />
        <div className="shape shape-yellow layout-02" />
        <div className="shape shape-red" />
        <div className="shape shape-blue" />
        <div className="container">
          <div className="row flex-align-c">
            <div className="col-lg-6">
              <div className="heading mb32">
                <h2 className="heading-title !text-3xl md:!text-5xl md:!leading-[60px]">
                  {translate("hero.paragraph")}
                </h2>
                <div className="mt-3 text-sm md:text-xl">
                  {translate("hero.text")}
                </div>
              </div>
              <Link
                href={`/${currentLang}/contact`}
                className="w-fit px-4 py-2 bg-blue-600 text-white rounded-md block"
              >
                {translate("hero.button-text")}
              </Link>
            </div>
            <div className="col-lg-6 mt-12 sm:mt-24 md:mt-0">
              <div className="images lg-mt32 layout-12">
                <div className="inner">
                  <img
                    className="custom-image-1 wow animate__animated   animate__fadeInLeft"
                    src="/assets/images/product-images/1.png"
                    alt="Image"
                  />
                  <img
                    className="custom-image-2 wow animate__animated    animate__fadeInLeft hidden md:block"
                    src="/assets/images/product-images/2.png"
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
