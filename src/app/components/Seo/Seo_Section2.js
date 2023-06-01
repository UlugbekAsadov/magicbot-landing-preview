"use client";
import { useLocaleContext } from "@/context/locale.context";

export default function Seo_Section2() {
  const { translate } = useLocaleContext();

  return (
    <>
      <section className="section-partner spdt">
        <div className="container">
          <div className="heading align-center">
            <h2 className="heading-title size-l">
              {translate("partners.paragraph")}
            </h2>
            <div className="heading-desc">
              {translate("partners.text")}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-6">
              <div className="partner-box">
                <img
                  className="mx-auto"
                  src="/assets/images/client-01.webp"
                  alt="Partner"
                />
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="partner-box">
                <img
                  className="mx-auto"
                  src="/assets/images/client-02.webp"
                  alt="Partner"
                />
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="partner-box">
                <img
                  className="mx-auto"
                  src="/assets/images/client-03.webp"
                  alt="Partner"
                />
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="partner-box">
                <img
                  className="mx-auto"
                  src="/assets/images/client-04.webp"
                  alt="Partner"
                />
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="partner-box">
                <img
                  className="mx-auto"
                  src="/assets/images/client-05.png"
                  alt="Partner"
                />
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="partner-box">
                <img
                  className="mx-auto"
                  src="/assets/images/client-06.webp"
                  alt="Partner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
