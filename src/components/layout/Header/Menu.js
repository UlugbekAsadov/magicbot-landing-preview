import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="main-menu">
        <div className="menu-action">
          <span className="item menu-back">
            <i className="las la-arrow-left" />
          </span>
          <span className="item menu-close">
            <i className="las la-times" />
          </span>
        </div>

        <ul>
          <li className="is-mega-menu">
            <Link href="/">
              Demos <span className="toggle-sub-menu"></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <div className="mega-menu flex-content-c flex">
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Home Demo I</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">App Showcase</Link>
                      </li>
                      <li>
                        <Link href="/">Shopify App</Link>
                      </li>
                      <li>
                        <Link href="/">Design Studio</Link>
                      </li>
                      <li>
                        <Link href="/">Music App</Link>
                      </li>
                      <li>
                        <Link href="/">HR Software</Link>
                      </li>
                      <li>
                        <Link href="/">Saas Subscription</Link>
                      </li>
                      <li>
                        <Link href="/">Home NFT</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Home Demo II</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Coworking</Link>
                      </li>
                      <li>
                        <Link href="/">Video Conferencing</Link>
                      </li>
                      <li>
                        <Link href="/">Designer Portfolio</Link>
                      </li>
                      <li>
                        <Link href="/">Dating App</Link>
                      </li>
                      <li>
                        <Link href="/">Crypto Wallet</Link>
                      </li>
                      <li>
                        <Link href="/">Email Tool</Link>
                      </li>
                      <li>
                        <Link href="/">Home Web3</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Home Demo III</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Fintech</Link>
                      </li>
                      <li>
                        <Link href="/">Ecommerce Platform</Link>
                      </li>
                      <li>
                        <Link href="/">SEO Agency</Link>
                      </li>
                      <li>
                        <Link href="/">Pet App</Link>
                      </li>
                      <li>
                        <Link href="/">Startup</Link>
                      </li>
                      <li>
                        <Link href="/">Chat Tool Service</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Home Demo IV</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Crypto ICO</Link>
                      </li>
                      <li>
                        <Link href="/">Seller Page - VR</Link>
                      </li>
                      <li>
                        <Link href="/">Ecommerce Agency</Link>
                      </li>
                      <li>
                        <Link href="/">Seller Page - Book</Link>
                      </li>
                      <li>
                        <Link href="/">Fitness App</Link>
                      </li>
                      <li>
                        <Link href="/">Webinar</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="is-mega-menu">
            <Link href="/">
              Pages <span className="toggle-sub-menu"></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <div className="mega-menu flex-content-c flex">
                  <div className="mega-menu-item">
                    <h6 className="mega-head">About</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">About Studio</Link>
                      </li>
                      <li>
                        <Link href="/">About Company</Link>
                      </li>
                      <li>
                        <Link href="/">About Me</Link>
                      </li>
                      <li>
                        <Link href="/">About Teams</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Services</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Service 01</Link>
                      </li>
                      <li>
                        <Link href="/">Service 02</Link>
                      </li>
                      <li>
                        <Link href="/">Service 03</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Contact</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Contact 01</Link>
                      </li>
                      <li>
                        <Link href="/">Contact 02</Link>
                      </li>
                      <li>
                        <Link href="/">Contact 03</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Pricing</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Pricing 01</Link>
                      </li>
                      <li>
                        <Link href="/">Pricing 02</Link>
                      </li>
                      <li>
                        <Link href="/">Pricing 03</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Utility</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Careers</Link>
                      </li>
                      <li>
                        <Link href="/">Job Detail</Link>
                      </li>
                      <li>
                        <Link href="/">Login</Link>
                      </li>
                      <li>
                        <Link href="/">Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Misc</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Coming Soon</Link>
                      </li>
                      <li>
                        <Link href="/">Maintenance</Link>
                      </li>
                      <li>
                        <Link href="/">404 Page</Link>
                      </li>
                      <li>
                        <Link href="/">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="is-mega-menu">
            <Link href="/">
              Portfolio <span className="toggle-sub-menu"></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <div className="mega-menu flex-content-c flex">
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Classic Style</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Grid Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Metro Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Masonry Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Mosaic Layout</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Minimal Style</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Grid Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Metro Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Masonry Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Mosaic Layout</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Modern Style</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Grid Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Metro Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Masonry Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Mosaic Layout</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Single Portfolio</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Layout 01</Link>
                      </li>
                      <li>
                        <Link href="/">Layout 02</Link>
                      </li>
                      <li>
                        <Link href="/">Layout 03</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="is-mega-menu">
            <Link href="/">
              Blog <span className="toggle-sub-menu"></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <div className="mega-menu flex-content-c flex">
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Simple Style</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Standard Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Sidebar Layout</Link>
                      </li>
                      <li>
                        <Link href="/">List Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Grid Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Masonry Layout</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Card Style</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Standard Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Sidebar Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Grid Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Masonry Layout</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Boxed Style</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Standard Layout</Link>
                      </li>
                      <li>
                        <Link href="/">List Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Grid Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Masonry Layout</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">BG Style</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Standard Layout</Link>
                      </li>
                      <li>
                        <Link href="/">List Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Grid Layout</Link>
                      </li>
                      <li>
                        <Link href="/">Masonry Layout</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-item">
                    <h6 className="mega-head">Single Posts</h6>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Standard Post</Link>
                      </li>
                      <li>
                        <Link href="/">Background Post</Link>
                      </li>
                      <li>
                        <Link href="/">Featured Image Post</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="is-normal-menu">
            <Link href="/">
              Shop <span className="toggle-sub-menu"></span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link href="/">Shop Layout</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/">Shop Fullwidth</Link>
                  </li>
                  <li>
                    <Link href="/">Shop Sidebar</Link>
                  </li>
                  <li>
                    <Link href="/">Shop Detail</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/">Other</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/">Cart</Link>
                  </li>
                  <li>
                    <Link href="/">Checkout</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
