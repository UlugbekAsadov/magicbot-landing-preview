import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="inner">
              <div className="row flex justify-between">
                <div className="col-lg-3">
                  <div className="footer-item footer-about">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src="/assets/images/logo-light.svg"
                          alt="logo"
                          width={150}
                          height={30}
                        />
                      </Link>
                    </div>
                    <p>
                      A amazing WordPress theme designed specifically for a
                      startup, apps, business, SaaS, and IT services.
                    </p>
                  </div>
                </div>

                <div className="col-lg-2">
                  <div className="footer-item footer-menu ">
                    <p className="font-bold text-black mb-3">Resources</p>
                    <ul>
                      <li>
                        <Link href="/" title="Downloads">
                          Downloads
                        </Link>
                      </li>
                      <li>
                        <Link href="/" title="Help Center">
                          Help Center
                        </Link>
                      </li>
                      <li>
                        <Link href="/" title="Partners">
                          Partners
                        </Link>
                      </li>
                      <li>
                        <Link href="/" title="Press Kit">
                          Press Kit
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
