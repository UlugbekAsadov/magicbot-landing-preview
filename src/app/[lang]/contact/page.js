"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function ContactOne() {
  const [formValues, setFormValues] = useState({
    full_name: "",
    phone_number: "+998",
    shop_name: "",
  });

  const handleChangeValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmitform = () => {
    console.log(formValues);
  };

  return (
    <>
      <Layout pageTitle="Свяжитесь с нами">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="heading">
                  <h2 className="heading-title">Контакты.</h2>
                  <div className="heading-desc">
                    Возникли вопросы? Обратитесь к нашим менеджерам - они всегда
                    рады помочь.
                  </div>
                </div>
                <div className="contact-boxs">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="contact-box">
                        <a
                          href="tel:+998770034404"
                          title="Call us"
                          className="background-navy"
                        >
                          Телефон<span>+998 77 003-44-04</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-box">
                        <a
                          href="https://t.me/humocommercee"
                          title="Email us"
                          className="background-dark"
                          target={"_blank"}
                        >
                          Телеграм<span>@humocommercee</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading">
                  <h2 className="heading-title">Наш адрес</h2>
                  <div className="heading-desc">
                    Город Ташкент, Мирзо-Улугбекский район, ул. Муминова 4а
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529.5290001742414!2d69.33705364378801!3d41.342172252350636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bdeadef8619%3A0x5989fa5f19361243!2sMohirdev!5e0!3m2!1sen!2s!4v1692260587456!5m2!1sen!2s"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form layout-01">
                <div className="heading">
                  <h2 className="heading-title">Хотите подключиться?</h2>
                  <div className="heading-desc">
                    Оставьте заявку и наши менеджеры свяжутся с вами в ближайшее
                    время!
                  </div>
                </div>
                <form onSubmit={handleSubmitform}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="field-input">
                        <label htmlFor="full_name">Имя и фамилия*</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          placeholder="Введите свое и имя и фамилия"
                          className="px-3 "
                          value={formValues.full_name}
                          onChange={handleChangeValue}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="field-input">
                        <label htmlFor="phone_number">Номер телефона *</label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          maxLength={13}
                          placeholder="Введите свое номер телефона"
                          className="px-3 "
                          value={formValues.phone_number}
                          onChange={handleChangeValue}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="field-input">
                        <label htmlFor="shop_name">Название магазина*</label>
                        <input
                          type="text"
                          name="shop_name"
                          id="shop_name"
                          placeholder="Введите свое название магазина"
                          className="px-3 "
                          value={formValues.shop_name}
                          onChange={handleChangeValue}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="field-submit">
                        <input
                          type="submit"
                          defaultValue="Send Message"
                          name="submit"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
