"use client";

import { useLocaleContext } from "../../context/locale.context";

export default function StatisticsSection() {
  const { translate } = useLocaleContext();
  return (
    <>
      <section className="section spdt">
        <div className="container">
          <div className="heading align-center">
            <h2 className="heading-title size-l">
              {translate("statistics.paragraph")}
            </h2>
            <p className="mt-2">{translate("statistics.desc")}</p>
          </div>
          <div className="block-number">
            <div className="row">
              <div className="col-lg-4 col-md-8">
                <div className="item">
                  <h4 className="title">{translate("statistics.first_col")}</h4>
                  <div className="number">
                    <span style={{ marginRight: "12px" }} className="first">
                      18
                    </span>
                    <span className="first">
                      {translate("common.million_short")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-8">
                <div className="item">
                  <h4 className="title">{translate("statistics.sec_col")}</h4>
                  <div className="number">
                    <span style={{ marginRight: "12px" }} className="first">
                      740
                    </span>
                    <span className="first">
                      {translate("common.million_short")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <div className="item">
                  <h4 className="title">{translate("statistics.third_col")}</h4>
                  <div className="number">
                    <span style={{ marginRight: "12px" }} className="first">
                      18
                    </span>
                    <span className="first">
                      {translate("common.thousand_short")}
                    </span>
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
