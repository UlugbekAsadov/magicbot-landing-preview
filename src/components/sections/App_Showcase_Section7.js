"use client";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper/core";

SwiperCore.use([Pagination]);

export default function App_Showcase_Section7() {
  return (
    <>
      <section className="section has-icon icon-bottom-right background-grey spdtb">
        <div className="container">
          <div className="heading align-center">
            <h2 className="heading-title size-l">App Screenshots</h2>
            <div className="heading-desc">
              It is a long established fact that a reader
            </div>
          </div>
          <div className="swiper">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              pagination={{
                clickable: true,
                el: ".js-pagination",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img
                  src="/assets/images/app-scr-01.png"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/app-scr-02.png"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/app-scr-03.png"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/app-scr-04.png"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/app-scr-01.png"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/app-scr-02.png"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/app-scr-03.png"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/app-scr-04.png"
                  alt="App Screenshots"
                />
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination block-gallery-pagination js-pagination" />
          </div>
        </div>
        <img className="icon" src="/assets/images/asc6.png" alt="Image" />
      </section>
    </>
  );
}
