"use client";
import React from "react";
import Layout from "@/components/layout/layout";
import { useLocaleContext } from "@/context/locale.context";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ThemeContextProvider } from "@/context/theme.context";
import { DropDown } from "@/components/elements/dropdown";
import {
  businessTypes,
  onlineBusinessOptions,
} from "@/utils/mocks/lead-form.mock";
import { useRouter } from "next/navigation";
export default function ContactOne({ params }) {
  const { lang } = params;
  const [hasSubmitted, setHasSubmitForm] = useState(
    sessionStorage.getItem("isLeadSubmitted")
  );
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    full_name: "",
    phone_number: "+998",
    store_name: "",
  });

  const [hasError, setHasError] = useState(false);
  const [hasNameError, setHasNameError] = useState(false);
  const [hasQuestionError, setHasQuestionError] = useState(false);
  const [hasCaptchaError, setHasCaptchaError] = useState(false);
  const { translate, currentLang } = useLocaleContext();
  const [selectedBusiness, setSelectedBusiness] = useState(
    onlineBusinessOptions[currentLang][0]
  );
  const [selectedBusinessType, setSelectedBusinessType] = useState(
    businessTypes[currentLang][0]
  );
  const route = useRouter();

  const recaptchaRef = React.createRef();

  const handleChangeValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    setHasQuestionError(false);
    setHasNameError(false);
    setHasError(false);
    setHasCaptchaError(false);

    if (!formValues.full_name.length) {
      return setHasNameError(true);
    }

    if (formValues.phone_number.length !== 13) {
      return setHasError(true);
    }

    setIsLoading(true);
    const token = await recaptchaRef.current.getValue();

    if (!token) {
      setHasCaptchaError(true);
      return setIsLoading(false);
    }

    try {
      const body = {
        title: "Новый лид с сайта",
        name: formValues.full_name,
        phone: formValues.phone_number,
        question: formValues.question,
        business_type: selectedBusinessType.name,
        business_location: selectedBusiness.name,
        token,
      };

      const config = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch("https://magicrm.uz/api/v1/leads", config)
        .then((res) => res.json())
        .then((_) => {
          sessionStorage.setItem("isLeadSubmitted", true);
          route(`/${lang}/contact/success`);
          setHasSubmitForm(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ThemeContextProvider>
      <Layout pageTitle={translate("contact_page.title")} lang={lang}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="heading">
                  <h2 className="heading-title">{translate("form.contact")}</h2>
                  <div className="heading-desc">
                    {translate("form.title_2")}
                  </div>
                </div>
                <div className="contact-boxs">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="contact-box ">
                        <a
                          href="tel:+998770034404"
                          title="Call us"
                          className="background-navy hover:bg-blue-700"
                        >
                          {translate("form.phone")}
                          <span>+998 77 114 99 98</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-box  ">
                        <a
                          href="https://t.me/magicbotuz_support"
                          title="Email us"
                          className="background-dark hover:bg-black"
                          target={"_blank"}
                        >
                          {translate("form.telegram")}
                          <span>@magicbotuz_support</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading">
                  <h2 className="heading-title">
                    {translate("form.our_address")}
                  </h2>
                  <div className="heading-desc">
                    {translate("form.address")}
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.47601299182!2d69.33467371288474!3d41.34200619868728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef559bf190579%3A0x2b4d73828f4c1eb5!2sHumocommerce!5e0!3m2!1sru!2s!4v1719404519043!5m2!1sru!2s"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 relative">
              <div className="contact-form layout-01">
                <div className="heading">
                  <h2 className="heading-title">
                    {translate("form.wanna_connect")}
                  </h2>
                  <div className="heading-desc">{translate("form.title")}</div>
                </div>
                <form onSubmit={handleSubmitForm}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="field-input">
                        <label htmlFor="full_name">
                          {translate("form.full_name")}*
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          placeholder={translate(
                            "contact_page.form.full_name_placeholder"
                          )}
                          className="px-3 "
                          value={formValues.full_name}
                          onChange={handleChangeValue}
                        />
                        {hasNameError && (
                          <span className="text-xs text-red-500">
                            {translate("form.required")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="field-input">
                        <label htmlFor="phone_number">
                          {translate("form.phone_number")} *
                        </label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          maxLength={13}
                          minLength={13}
                          placeholder={translate(
                            "contact_page.form.phone_number_placeholder"
                          )}
                          className="px-3 "
                          value={formValues.phone_number}
                          onChange={handleChangeValue}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          required
                        />
                        {hasError && (
                          <span className="text-xs text-red-500">
                            {translate("form.required")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="field-input">
                        <label htmlFor="shop_name">
                          {translate("form.do_you_sell_online")}*
                        </label>

                        <DropDown
                          dropdown={onlineBusinessOptions[currentLang]}
                          selectedOption={selectedBusiness}
                          setSelectedOption={setSelectedBusiness}
                        />
                        {hasQuestionError && (
                          <span className="text-xs text-red-500">
                            {translate("form.required")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="field-input">
                        <label htmlFor="store_name">
                          {translate("form.store_name")}*
                        </label>
                        <input
                          type="text"
                          name="store_name"
                          id="store_name"
                          placeholder={translate(
                            "contact_page.form.store_name_placeholder"
                          )}
                          className="px-3 "
                          value={formValues.store_name}
                          onChange={handleChangeValue}
                        />
                        {hasNameError && (
                          <span className="text-xs text-red-500">
                            {translate("form.required")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="field-input">
                        <label htmlFor="shop_name">
                          {translate("form.business_type")}*
                        </label>

                        <DropDown
                          dropdown={businessTypes[currentLang]}
                          selectedOption={selectedBusinessType}
                          setSelectedOption={setSelectedBusinessType}
                        />
                        {hasQuestionError && (
                          <span className="text-xs text-red-500">
                            {translate("form.required")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LcUObonAAAAADniy41J3gKIxcgv-4XrBSkYyjsO"
                      />
                      {hasCaptchaError && (
                        <span className="text-xs text-red-500">
                          {translate("form.captcha_required")}
                        </span>
                      )}
                    </div>

                    <div className="col-md-12">
                      <div className="field-submit">
                        <button
                          type="submit"
                          className="bg-blue-600 px-3 py-3 rounded-lg text-white w-full mt-4"
                        >
                          {isLoading ? (
                            <svg
                              version="1.1"
                              id="L9"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 100 100"
                              enableBackground="new 0 0 0 0"
                              xmlSpace="preserve"
                              className="w-6 mx-auto"
                            >
                              <path
                                fill="#fff"
                                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                              >
                                <animateTransform
                                  attributeName="transform"
                                  attributeType="XML"
                                  type="rotate"
                                  dur="1s"
                                  from="0 50 50"
                                  to="360 50 50"
                                  repeatCount="indefinite"
                                ></animateTransform>
                              </path>
                            </svg>
                          ) : (
                            translate("form.submit")
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {hasSubmitted && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center  backdrop-blur-lg">
                  <div className="header-color animate-submittionPopup flex flex-col items-center justify-center max-w-5xl w-full rounded-xl mx-5 px-5 py-8 md:py-14">
                    <h2 className="font-bold text-3xl md:text-4xl  gradient-text text-center">
                      {translate("form.thanks")}
                    </h2>
                    <p className="font-medium max-w-md w-full mt-3 md:mt-9 text-xl md:text-2xl text-center text-zinc-400">
                      {translate("form.message")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </ThemeContextProvider>
  );
}
