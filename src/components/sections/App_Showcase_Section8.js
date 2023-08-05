"use client";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function App_Showcase_Section8() {
  return (
    <>
      <section className="section has-icon icon-bottom-left background-yellow spdtb">
        <div className="container">
          <div className="heading heading-alway-dark align-center">
            <h2 className="heading-title size-l">People who already love us</h2>
          </div>
          <div className="block-testimonial layout-02">
            <div
              className="testimonial-gallery thumbs-gallery"
              style={{
                backgroundImage: 'url("/assets/images/background-quote.png")',
              }}
            >
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="item">
                      <p>
                        "Easy to follow but incredibly insightful tutorials.
                        Makes learning new software and techniques and real
                        pleasure everyday! Keep up the good work"
                      </p>
                      <div className="meta">
                        <div className="author">
                          <div className="info">
                            <div className="name">Iruka Akuchi</div>
                            <div className="position">
                              Assistant Post Order, Wipple
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="control">
                      <div className="swiper-slide">
                        <div className="item zoom">
                          <img
                            src="/assets/images/post-author-01.jpg"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="item">
                      <p>
                        "Easy to follow but incredibly insightful tutorials.
                        Makes learning new software and techniques and real
                        pleasure everyday! Keep up the good work"
                      </p>
                      <div className="meta">
                        <div className="author">
                          <div className="info">
                            <div className="name">Erika Mateo</div>
                            <div className="position">
                              Assistant Post Order, Wipple
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="control">
                      <div className="swiper-slide">
                        <div className="item zoom">
                          <img
                            src="/assets/images/post-author-02.jpg"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="item">
                      <p>
                        "Easy to follow but incredibly insightful tutorials.
                        Makes learning new software and techniques and real
                        pleasure everyday! Keep up the good work"
                      </p>
                      <div className="meta">
                        <div className="author">
                          <div className="info">
                            <div className="name">Anna Ly</div>
                            <div className="position">
                              Assistant Post Order, Wipple
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="control">
                      <div className="swiper-slide">
                        <div className="item zoom">
                          <img
                            src="/assets/images/post-author-04.jpg"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* <div className="view123">
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <p>
                                                "Easy to follow but incredibly insightful tutorials. Makes
                                                learning new software and techniques and real pleasure
                                                everyday! Keep up the good work"
                                            </p>
                                            <div className="meta">
                                                <div className="author">
                                                <div className="info">
                                                    <div className="name">Iruka Akuchi</div>
                                                    <div className="position">
                                                    Assistant Post Order, Wipple
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="swiper-slide">
                                                <div className="item zoom">
                                                    <img src="/assets/images/post-author-01.jpg" alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div> */}
            </div>
          </div>
        </div>
        <img
          className="icon lg-hidden"
          src="/assets/images/asc6.png"
          alt="Image"
        />
      </section>
    </>
  );
}
