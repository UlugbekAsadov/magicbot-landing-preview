"use client";
import { useLocaleContext } from "@/context/locale.context";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const CouponSection = ({ coupon, setCoupon }) => {
  const { translate } = useLocaleContext();
  const [couponValue, setCouponValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isCouponValid, setIsCouponValid] = useState(true);

  const checkCoupon = async () => {
    setIsSubmitting(true);
    setIsCouponValid(true);

    const res = await fetch("https://magicstore.uz/api/v1/discount-apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: couponValue,
      }),
    });

    const data = await res.json();

    if (res.status === 400) {
      setIsCouponValid(false);
    }

    if (res.status === 200) {
      setCoupon(data.discount);
    }

    setIsSubmitting(false);
  };

  const onChangeInput = (e) => {
    setIsCouponValid(true);
    setCouponValue(e.target.value);
  };

  return (
    <div
      id="coupon"
      className="section-pricing section has-icon icon-bottom-center header-color my-20"
    >
      <div className="container">
        <div className="flex items-center gap-4 justify-between p-10 border rounded-2xl">
          <div>
            <h2 className="text-3xl font-semibold">
              {translate("coupon.title")}
            </h2>
            <p className="text-lg mt-3">{translate("coupon.description")}</p>
          </div>
          <div className="max-w-[400px] w-full">
            <div>
              <label htmlFor="coupon-code">
                {translate("coupon.enter_coupon_code")}
              </label>
              <input
                disabled={!!coupon}
                id="coupon-code"
                type="text"
                className={twMerge(
                  "outline-none px-3 py-2 rounded-md placeholder:text-sm",
                  isCouponValid === false && "!bg-red-500/50",
                  !!coupon && "!bg-green-500/50 "
                )}
                placeholder={translate("coupon.enter_coupon_code")}
                onChange={onChangeInput}
                value={couponValue}
              />
              {!isCouponValid && (
                <small className="text-red-500">
                  {translate("coupon.coupon_not_found")}
                </small>
              )}
              {!!coupon && (
                <small className="text-green-500">
                  {translate("coupon.coupon_successfully_applied")}
                </small>
              )}
            </div>
            <button
              onClick={checkCoupon}
              disabled={isSubmitting || !!coupon}
              className={twMerge(
                "button fullfield w-full text-center flex justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {translate("coupon.check")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
