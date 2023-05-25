import Link from "next/link";
export default function Seo_Section3() {
  return (
    <>
      <section className="section background-contain-center-left spdtb">
        <div className="container">
          <div className="row flex-align-c">
            <div className="col-lg-6">
              {/* HELMENT IMAGE */}
              <div className="images layout-02">
                <div className="images layout-02 lg-mt60 lg-mb60">
                  <div className="inner">
                    <img
                      className="img01"
                      src="/assets/images/asc3.png"
                      alt="Image"
                    />
                    <img
                      className="img02 wow animate__animated      animate__fadeInLeft"
                      src="/assets/images/asc4.png"
                      alt="Image"
                    />
                    <img
                      className="img03 wow animate__animated      animate__fadeInRight"
                      src="/assets/images/asc5.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lg-mt32">
                <div className="heading mb32">
                  <div className="heading-sub color-navy">
                    Marketing optimized
                  </div>
                  <h2 className="heading-title">
                    Increase your average cart revenue
                  </h2>
                  <div className="heading-desc">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </div>
                </div>
                <div className="block-icon-box layout-01 mb40">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="icon-box">
                        <div className="inner">
                          <div className="icon">
                            <img src="/assets/images/hft-07.svg" alt="Icon" />
                          </div>
                          <div className="content pdr50">
                            <h3 className="title">Shipping methods</h3>
                            <div className="desc">
                              It is a long established fact that a reader will
                              be distracted
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="icon-box">
                        <div className="inner">
                          <div className="icon">
                            <img src="/assets/images/hft-08.svg" alt="Icon" />
                          </div>
                          <div className="content pdr50">
                            <h3 className="title">Fully integrated</h3>
                            <div className="desc">
                              It is a long established fact that a reader will
                              be distracted
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="icon-box">
                        <div className="inner">
                          <div className="icon">
                            <img src="/assets/images/hft-09.svg" alt="Icon" />
                          </div>
                          <div className="content pdr50">
                            <h3 className="title">Secure payments</h3>
                            <div className="desc">
                              It is a long established fact that a reader will
                              be distracted
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="icon-box">
                        <div className="inner">
                          <div className="icon">
                            <img src="/assets/images/hft-10.svg" alt="Icon" />
                          </div>
                          <div className="content pdr50">
                            <h3 className="title">Data analytics</h3>
                            <div className="desc">
                              It is a long established fact that a reader will
                              be distracted
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-wrap">
                  <Link
                    href="/"
                    className="button text color-navy"
                    title="Learn More"
                  >
                    Learn More <i className="las la-long-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
