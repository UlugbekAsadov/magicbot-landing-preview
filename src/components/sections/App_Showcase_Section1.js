"use client";

import { useLocaleContext } from "@/context/locale.context";

export default function App_Showcase_Section1() {
  const { translate } = useLocaleContext();
  return (
    <>
      <section
        className="section background-overlay background-full pdt180 oveflow-hidden"
        style={{ backgroundImage: "url(/assets/images/hero-dark.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading heading-alway-white wow animate__animated animate__fadeInLeft ">
                <div className="heading-sub d-none">Magicbot</div>
                <h2 className="heading-title size-xl">
                  {translate("hero.paragraph")}
                </h2>
                <div
                  className="heading-desc"
                  data-wow
                  animate__animated-delay="0.5s"
                >
                  {translate("hero.text")}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="images align-right layout-01 lg-mt32">
                <img
                  className="img01 wow animate__animated animate__fadeInUp "
                  data-wow
                  animate__animated-delay="0.5s"
                  src="/assets/images/asc1.png"
                  alt="Image"
                />
                <img
                  className="img02 wow animate__animated animate__fadeInUp "
                  src="/assets/images/hero-phone.png"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
