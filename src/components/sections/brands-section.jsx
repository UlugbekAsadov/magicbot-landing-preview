"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const animation = { duration: 10000, easing: (t) => t };

const brands = [
  { src: "/assets/icons/lacoste.svg" },
  { src: "/assets/icons/levis.svg" },
  { src: "/assets/icons/mayoral.svg" },
  { src: "/assets/images/michele-cafe.png" },
  { src: "/assets/images/tommy-hilfiger.png" },
  { src: "/assets/images/beautish_uz.png", width: 120 },
  { src: "/assets/images/fcn-shop.png", width: 200 },
  { src: "/assets/images/geske.png" },
];

export const BrandsSection = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 5,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 3,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2,
        },
      },
      "(max-width: 480px)": {
        slides: {
          perView: 1,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="container-xl spdt">
      <div ref={sliderRef} className="keen-slider">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={twMerge(
              "keen-slider__slide flex items-center w-fit filter",
              "number-slide" + (index + 1)
            )}
          >
            <Image
              src={brand.src}
              alt="brand"
              width={brand?.width || 150}
              height={brand?.height || 20}
              quality={brand?.quality || 60}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
