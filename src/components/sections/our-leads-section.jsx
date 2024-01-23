"use client";
import { useLocaleContext } from "@/context/locale.context";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
export default function OurLeadsSection() {
  const { translate } = useLocaleContext();

  return (
    <section className="section">
      <div className="container">
        <div className=" heading align-center mt-16">
          <h2 className="text-center  heading-title size-l">
            {translate("our_leads.title")}
          </h2>
        </div>
        <Swiper
          className="mySwiper"
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            425: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={30}
          autoplay={false}
          slideToClickedSlide={false}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img
                className="w-[200px]"
                src="/assets/images/getbook.png"
                alt="image"
              />
              <a href="https://t.me/getbookrobot" target="_blank" className="mt-2">
                @getbookrobot
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img
                className="w-[200px]"
                src="/assets/images/cwatches.png"
                alt="image"
              />
              <a href="https://t.me/cwatches_bot" className="mt-2">
                @cwatches_bot
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img
                className="w-[200px]"
                src="/assets/images/ellos.png"
                alt="image"
              />
              <a href="https://t.me/ellos_home_bot" className="mt-2">
                @ellos_home_bot
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img
                className="w-[200px]"
                src="/assets/images/beautylish.png"
                alt="image"
              />
              <a href="https://t.me/Beautylish_bot" className="mt-2">
                @Beautylish_bot
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="slider__dots flex items-center justify-center gap-2 mt-4">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}
