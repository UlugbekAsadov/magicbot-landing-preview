"use client";

import Link from "next/link";
import { useState } from "react";

export default function App_Showcase_Section9() {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => {
    setToggled(!isToggled);
  };

  return (
    <>
      <div
        id="plans"
        className="section-pricing section has-icon icon-bottom-center background-grey spdtb mb-20"
      >
        <div className="container">
          <div className="pricing-table layout-01 is-active">
            <div className="row">
              <div className="col-lg-6">
                <div className="pricing-box">
                  <div className="inner">
                    <div className="name">ПРИ ОПЛАТЕ ЗА МЕСЯЦ</div>
                    <div className="price">
                      <div className="number">299,000</div> / Месяц
                    </div>
                    <div className="desc">
                      <p>
                        Единовременная плата за установку составляет 4.990.000
                        СУМОВ
                      </p>
                    </div>
                    <ul className="list">
                      <li className="active">
                        Более 10+ необходимых функций для вашего интернет
                        магазина
                      </li>
                      <li className="active">
                        4 интеграций (Рауте, Click, SMS-провайдер, Billz)
                      </li>
                      <li className="active">
                        Подключение CRM системы, либо интеграции с другими
                        системами - увеличат стоимость в зависимости от типа
                        системы, сложности и варианта реализации 7 дней
                        бесплатно
                      </li>
                    </ul>
                    <div className="button-wrap">
                      <Link
                        href="/contact-01"
                        className="button fullfield"
                        title="Начать сейчас"
                      >
                        Начать сейчас
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-box popular">
                  <div className="inner">
                    <div className="name">
                      ПРИ ОПЛАТЕ ЗА ГОД
                      <span className="badge-popular">
                        Скидка <span className="font-bold">20%</span>
                      </span>
                    </div>
                    <div className="price">
                      <div className="number">239,000</div> / Месяц
                    </div>
                    <div className="desc">
                      <p>
                        Единовременная плата за установку составляет 4.990.000
                        СУМОВ
                      </p>
                    </div>
                    <ul className="list">
                      <li className="active">
                        И другие греимущества, что и при оплате за месяц
                      </li>
                      <li className="active">
                        Подключение CRM системы, либо интеграции с другими
                        системами - увеличат стоимость в зависимости от типа
                        системы, сложности и варианта реализации
                      </li>
                    </ul>
                    <div className="button-wrap">
                      <Link
                        href="/contact-01"
                        className="button fullfield"
                        title="Начать сейчас"
                      >
                        Начать сейчас
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
