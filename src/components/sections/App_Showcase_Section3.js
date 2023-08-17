"use client";

import { CheckIcon } from "@heroicons/react/20/solid";

export default function App_Showcase_Section3() {
  return (
    <>
      <section id={"possibilities"} className="section spdt">
        <div className="container">
          <div className=" heading align-center">
            <h2 className="text-center  heading-title size-l">
              Преимущества платформы
            </h2>
          </div>
          <div className="row flex-align-c mt-14">
            <div className="col-lg-6">
              <div className="">
                <div className="images layout-10">
                  <div className="inner">
                    <img
                      className="custom-image wow animate__animated   animate__fadeInLeft"
                      src="/assets/images/product-images/10.webp"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pdr50 pdl80 lg-mt32">
                <div className="heading mb24">
                  <div className="heading-sub">Маркетинг</div>
                  <h2 className="heading-title size-l">Умный Маркетинг</h2>
                  <div className="heading-desc">
                    Сегментация, рекомендации, уведомления и многое другое.
                    Magicstore поможет вам увеличить продажи и удержать клиентов
                  </div>
                </div>
                <div className="block-list layout-01 block-list-flex">
                  <ul>
                    <li>
                      <i className="las la-check" />
                      <span>Рекомендация товаров по разным критериям.</span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>Сегментация для Push уведомлений</span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>
                        Личный профиль и возможность отслеживать товары
                      </span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>Возможность оплаты в рассрочку</span>
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
