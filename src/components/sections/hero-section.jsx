"use client";

import { useLocaleContext } from "@/context/locale.context";
import Link from "next/link";
import { getOffsetTop } from "@/utils/funtions/calculate-distance";
import { useEffect, useRef, useState } from "react";
import "./styles/hero-section.css";
import Image from "next/image";
import { useUtmContext } from "@/context/utm.context";

export const HeroSection = () => {
  const { translate } = useLocaleContext();
  const [cursorPositions, setCursorPositions] = useState(null);
  const heroRef = useRef();

  useEffect(() => {
    const heroSection = document.querySelector(".hero");

    const handleMove = (e) => {
      const distance = getOffsetTop(heroSection);
      const x = e.pageX - heroRef.current?.offsetLeft;
      const y = e.pageY - distance;
      setCursorPositions({ x, y });
    };

    document.body.addEventListener("pointermove", handleMove);
    return () => {
      document.body.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div ref={heroRef} id={"hero-section"} className="hero">
      <HeroContents
        buttonText={translate("hero.button-text")}
        text={translate("hero.text")}
        src2={`/assets/images/product-images/2.png`}
        src1={`/assets/images/product-images/1.png`}
        paragraph={translate("hero.paragraph")}
      />

      {cursorPositions && (
        <div
          className="row flex-align-c hero__overlay"
          style={{
            "--x": `${cursorPositions.x}px`,
            "--y": `${cursorPositions.y}px`,
            opacity: cursorPositions ? "1" : "0",
          }}
        >
          <HeroContents />
        </div>
      )}
    </div>
  );
};

function HeroContents({ paragraph, text, buttonText, src1, src2 }) {
  const { translate } = useLocaleContext();
  const { link } = useUtmContext();

  return (
    <section className="section pt-8 md:pt-16 has-shape hero__section spdb">
      <div className="shape shape-yellow layout-01" />
      <div className="shape shape-yellow layout-02" />
      <div className="shape shape-red" />
      <div className="shape shape-blue" />
      <div className="container hero__main">
        <div className="row flex-align-c ">
          <div className="col-lg-6 hero__col">
            <div className="heading mb32">
              <h2 className="heading-title !text-3xl md:!text-5xl md:!leading-[60px]">
                {paragraph}
              </h2>
              <div className="mt-3 text-sm md:text-xl">{text}</div>
            </div>
            {buttonText && (
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <Link
                  href={link}
                  className="w-full text-center sm:w-fit px-3 text-lg md:text-lg md:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md block"
                >
                  {buttonText}
                </Link>
                <Link
                  href={`https://t.me/magicstoreuz_bot`}
                  target="_blank"
                  className="w-full text-center sm:w-fit px-3 text-lg md:text-lg md:px-4 py-2 bg-black text-white rounded-md block fullfield"
                >
                  {translate("hero.shop-text")}
                </Link>
              </div>
            )}
          </div>
          <div className="col-lg-6 mt-12 sm:mt-24 md:mt-0 hero__col">
            <div className="images lg-mt32 layout-12">
              <div className="inner">
                {src1 && (
                  <Image
                    className="custom-image-1 wow animate__animated animate__fadeInLeft"
                    src={src1}
                    alt="Magicbot"
                    width={200}
                    height={200}
                    quality={100}
                  />
                )}
                {src2 && (
                  <Image
                    className="custom-image-2 wow animate__animated animate__fadeInLeft hidden md:block"
                    src={src2}
                    alt="Magicbot"
                    width={200}
                    height={200}
                    quality={100}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
