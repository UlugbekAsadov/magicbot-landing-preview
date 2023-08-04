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
              spaceBetween={10}
              slidesPerView={3}
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
                  src="/assets/images/product-images/5.webp"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/product-images/6.webp"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/product-images/7.webp"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/product-images/8.webp"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/product-images/9.webp"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/product-images/10.webp"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/product-images/11.webp"
                  alt="App Screenshots"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/images/product-images/12.webp"
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
