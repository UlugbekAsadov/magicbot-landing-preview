"use client";
import { useLocaleContext } from "@/context/locale.context";

export default function Seo_Section5() {
  const { translate } = useLocaleContext();

  return (
    <>
      <section className="section spdt">
        <div className="container">
          <div className="heading align-center">
            <div className="heading-sub color-navy">
              {translate("advantages-of-platform.highligh-text")}
            </div>
            <h2 className="heading-title size-l">
              {translate("advantages-of-platform.paragraph")}
            </h2>
          </div>
          <div className="block-icon-box layout-14">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="icon-box align-center p30">
                  <div className="inner">
                    <div className="icon">
                      <img
                        className="mx-auto"
                        src="/assets/images/hi-06.png"
                        alt="Icon"
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">
                        {translate(
                          "advantages-of-platform.time-saving.paragraph"
                        )}
                      </h3>
                      <div className="desc">
                        {translate("advantages-of-platform.time-saving.text")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="icon-box align-center p30">
                  <div className="inner">
                    <div className="icon">
                      <img
                        className="mx-auto"
                        src="/assets/images/hi-07.png"
                        alt="Icon"
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">
                        {translate(
                          "advantages-of-platform.save-money.paragraph"
                        )}
                      </h3>
                      <div className="desc">
                        {translate("advantages-of-platform.save-money.text")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="icon-box align-center p30">
                  <div className="inner">
                    <div className="icon">
                      <img
                        className="mx-auto"
                        src="/assets/images/hi-08.png"
                        alt="Icon"
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">
                        {translate(
                          "advantages-of-platform.unlimited-possibilities.paragraph"
                        )}
                      </h3>
                      <div className="desc">
                        {translate(
                          "advantages-of-platform.unlimited-possibilities.text"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="icon-box align-center p30">
                  <div className="inner">
                    <div className="icon">
                      <img
                        className="mx-auto"
                        src="/assets/images/hi-09.png"
                        alt="Icon"
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">
                        {translate("advantages-of-platform.suitable.paragraph")}
                      </h3>
                      <div className="desc">
                        {translate("advantages-of-platform.suitable.text")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
