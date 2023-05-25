import Link from "next/link";
export default function Seo_Section4() {
  return (
    <>
      <section className="section background-contain-center-right spdtb overflow-hidden">
        <div className="container">
          <div className="row flex-align-c row-full">
            <div className="col-lg-6 lg-order-2">
              <div className="pdr60 lg-mt32">
                <div className="heading mb32">
                  <div className="heading-sub color-navy">
                    Design &amp; Configure
                  </div>
                  <h2 className="heading-title">
                    Your free online store is just a few clicks away.
                  </h2>
                  <div className="heading-desc">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </div>
                </div>
                <div className="block-icon-box layout-12 mb40">
                  <div className="icon-box">
                    <div className="inner">
                      <div className="icon">
                        <img src="/assets/images/hft-11.svg" alt="Icon" />
                      </div>
                      <div className="content pdr50">
                        <h3 className="title">Online editing</h3>
                        <div className="desc">
                          It is a long established fact that a reader will be
                          distracted
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="icon-box">
                    <div className="inner">
                      <div className="icon">
                        <img src="/assets/images/hft-12.svg" alt="Icon" />
                      </div>
                      <div className="content pdr50">
                        <h3 className="title">Sell digital products</h3>
                        <div className="desc">
                          It is a long established fact that a reader will be
                          distracted
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="icon-box">
                    <div className="inner">
                      <div className="icon">
                        <img src="/assets/images/hft-13.svg" alt="Icon" />
                      </div>
                      <div className="content pdr50">
                        <h3 className="title">Professional themes</h3>
                        <div className="desc">
                          It is a long established fact that a reader will be
                          distracted
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
            <div className="col-lg-6 col-full-right lg-order-1">
              <div className="images">
                <img
                  src="/assets/images/hep-18.webp"
                  alt="Image"
                  className="img01 wow animate__animated   animate__fadeInRight"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
