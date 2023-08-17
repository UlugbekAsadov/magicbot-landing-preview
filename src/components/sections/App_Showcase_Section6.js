"use client";

import Link from "next/link";

export default function App_Showcase_Section6() {
  return (
    <>
      <section className="section spdt">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 lg-order-2">
              <div className="pdr50 pdl80 lg-mt32">
                <div className="heading mb24">
                  <div className="heading-sub">Управление в одном месте</div>
                  <h2 className="heading-title size-l">Простота и Удобство</h2>
                  <div className="heading-desc">
                    Адаптивная админ-панель с CRM и обработкой заказов. Все, что
                    вам нужно для эффективного управления магазином
                  </div>
                </div>
                <div className="block-list layout-01 block-list-flex">
                  <ul>
                    <li>
                      <i className="las la-check" />
                      <span>Адаптивность ПК и Мобилка</span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>Внутренняя CRM система</span>
                    </li>
                    <li>
                      <i className="las la-check" />
                      <span>Обработка заказов</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 lg-order-1 flex items-center">
              <div className="pdl50">
                <div className="images layout-10">
                  <div className="inner -translate-x-7">
                    <img
                      className="  wow animate__animated   animate__fadeInLeft"
                      src="/assets/images/product-images/17.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" heading align-center mt-16">
            <h2 className="text-center  heading-title size-l">
              Тарифы, подходящие для любого бизнеса
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
