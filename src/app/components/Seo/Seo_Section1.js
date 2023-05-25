import Image from "next/image";
import Link from "next/link";
export default function Chat_Service_Section1() {
  return (
    <>
      <section
        className="section background-cover-right opt120 spdb"
        style={{ backgroundImage: "url(/assets/images/hcs-02.webp)" }}
      >
        <div className="container">
          <div className="row flex-align-c">
            <div className="col-lg-6">
              <div className="heading mb32">
                <h2 className="heading-title size-xl">
                  Increase sales <br /> with{" "}
                  <span className="color-navy nstyle={o-underline">
                    Chatool
                  </span>
                </h2>
                <div className="heading-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
              <div className="button-wrap mt32">
                <Link
                  href="/"
                  className="button fullfield xs-mb10"
                  title="Try it free"
                >
                  Try it free
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="images lg-mt32 layout-03">
                <div className="inner">
                  <img
                    className="img01   img-jump"
                    src="/assets/images/hcs-01.webp"
                    alt="Image"
                    loading="lazy"
                  />
                  <img
                    loading="lazy"
                    className="img21"
                    src="/assets/images/hcs-03.webp"
                    alt="Image"
                  />
                  <img
                    className="img22"
                    src="/assets/images/hcs-04.png"
                    alt="Image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
