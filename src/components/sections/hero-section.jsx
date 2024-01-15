"use client";

import { useLocaleContext } from "@/context/locale.context";
import Link from "next/link";

export default function HeroSection() {
  const { translate, currentLang } = useLocaleContext();

  return (
    <>
      <section id={"top"} className="section pt-16 md:pt-24 has-shape spdb">
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
              <div className="d-flex">
                <Link
                    href={`https://magicstore.uz/${currentLang}/register?utm_source=landing&utm_medium=button&utm_campaign=landing`}
                    className="w-fit px-3 text-sm md:text-base md:px-4 py-2 bg-blue-600 text-white rounded-md block mr-3"
                >
                  {translate("hero.button-text")}
                </Link>
                <Link
                    href={`https://t.me/magicstoreuz_bot`}
                    target={"_blank"}
                    className="w-fit px-3 text-sm md:text-base md:px-4 py-2 dark:bg-gray-600 dark:text-white rounded-md block"
                >
                  {translate("hero.shop-text")}
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-12 sm:mt-24 md:mt-0">
              <div className="images lg-mt32 layout-12">
                <div className="inner">
                  <img
                    className="custom-image-1 wow animate__animated   animate__fadeInLeft"
                    src="/assets/images/product-images/1.png"
                    alt="Magicbot uz images"
                  />
                  <img
                    className="custom-image-2 wow animate__animated    animate__fadeInLeft hidden md:block"
                    src="/assets/images/product-images/2.png"
                    alt="Magicbot uz images"
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
