"use client";
import React from "react";
import { useLocaleContext } from "@/context/locale.context";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { DropDown } from "@/components/elements/dropdown";
import {
  businessTypes,
  onlineBusinessOptions,
} from "@/utils/mocks/lead-form.mock";

export default function ContactOne() {
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
  const [hasStoreNameError, setHasStoreNameError] = useState(false);
  const [hasCaptchaError, setHasCaptchaError] = useState(false);
  const { translate, currentLang } = useLocaleContext();
  const [selectedBusiness, setSelectedBusiness] = useState(
    onlineBusinessOptions[currentLang][0]
  );
  const [selectedBusinessType, setSelectedBusinessType] = useState(
    businessTypes[currentLang][0]
  );

  const recaptchaRef = React.createRef();

  const handleChangeValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    setHasStoreNameError(false);
    setHasNameError(false);
    setHasError(false);
    setHasCaptchaError(false);

    if (!formValues.full_name.length) {
      return setHasNameError(true);
    }

    if (!formValues.store_name.length) {
      return setHasStoreNameError(true);
    }

    if (formValues.phone_number.length !== 13) {
      return setHasError(true);
    }

    setIsLoading(true);
    const token = await recaptchaRef.current.getValue();

    // if (!Boolean(token)) {
    //   setHasCaptchaError(true);
    //   return setIsLoading(false);
    // }

    try {
      const body = {
        title: "Новый лид с сайта",
        name: formValues.full_name,
        phone: formValues.phone_number,
        store_name: formValues.store_name,
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
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto shadow p-5 rounded-3xl block max-w-5xl w-full relative">
          <div className="contact-form layout-01">
            <div className="heading">
              <h2 className="heading-title text-center">
                {translate("form.wanna_connect")}
              </h2>
              <div className="heading-desc text-center">
                {translate("form.title")}
              </div>
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
                      className="px-3  "
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
                    {hasStoreNameError && (
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
  );
}
