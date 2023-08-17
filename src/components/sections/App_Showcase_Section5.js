"use client";

import { useState } from "react";
export default function App_Showcase_Section5() {
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
                      src="/assets/images/product-images/11_1.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pdr50 pdl80 lg-mt32">
                <div className="heading mb24">
                  <div className="heading-sub">Виртуальный продавец (AI)</div>
                  <h2 className="heading-title size-l">
                    Ваш личный AI-продавец
                  </h2>
                  <div className="heading-desc">
                    Наш виртуальный продавец анализирует ваш ассортимент и
                    предлагает клиентам именно то, что им нужно. 95 языков и
                    возможность обучения делают его незаменимым помощником
                  </div>
                </div>
                <div className="block-list layout-01 block-list-flex">
                  <ul>
                    <li>
                      <i className="las la-check" />
                      <span>Анализирует вашу продукцию и типы товаров.</span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>Рокомендует товары и понимает контекст</span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>Максимально человеческий язык общения</span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>Возможность обучения и редактирование ответов</span>
                    </li>

                    <li>
                      <i className="las la-check" />
                      <span> Знание 95 языков</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
