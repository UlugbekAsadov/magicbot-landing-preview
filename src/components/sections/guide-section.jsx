"use client";
import { useLocaleContext } from "@/context/locale.context";

export default function GuideSection() {
  const { translate } = useLocaleContext();
  return (
    <>
      <section className="section spdt ">
        <div className="container">
          <div className="inner background-grey spdtb br10 pdl100 pdr100">
            <div className="row">
              <div className="col-lg-6">
                <div className="lg-pdl30 lg-pdr30">
                  <div className="heading mb32">
                    <h2 className="heading-title size-l">
                      {translate("steps.paragraph.start_text")}{" "}
                      <span>{translate("steps.paragraph.highlight")}</span>{" "}
                      {translate("steps.paragraph.end_text")}
                    </h2>
                    <div className="heading-desc">
                      {translate("steps.text")}
                    </div>
                  </div>
                  <div className="block-list layout-04">
                    <ul>
                      <li>
                        <span className="number">1</span>
                        <h4 className="title">{translate("steps.step_1")}</h4>
                      </li>
                      <li>
                        <span className="number">2</span>
                        <h4 className="title">{translate("steps.step_2")}</h4>
                      </li>
                      <li>
                        <span className="number">3</span>
                        <h4 className="title">{translate("steps.step_3")}</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="lg-pdl30 lg-pdr30 lg-mt32">
                  <img src="/assets/images/step.png" alt="Magicbot uz images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
