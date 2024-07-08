"use client";

import { useEffect } from "react";
import Footer1 from "./Footer/footer";
import Header1 from "./Header/header";
import { useLocaleContext } from "@/context/locale.context";
import { HeaderTop } from "@/components/sections/header-top";
import { BackToTop } from "@/components/elements/BackToTop";

export default function Layout({
  children,
  siteContentClass,
  pageTitle,
  pageTitleSub,
  pageTitleDesc,
  pageTitleBtn,
  headerClass,
  lang,
}) {
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  });

  return (
    <>
      <div id="wrapper">
        <HeaderTop />
        <Header1 lang={lang} headerClass={headerClass} />

        <main id="main" className="site-main">
          {pageTitle && (
            <section className="page-title">
              <div className="container">
                <div className="inner align-center">
                  {pageTitleSub && <div className="sub">{pageTitleSub}</div>}
                  {pageTitle && <h1 className="title">{pageTitle}</h1>}
                  {pageTitleDesc && <p className="desc">{pageTitleDesc}</p>}
                  {pageTitleBtn && (
                    <div className="button-wrap">
                      <a
                        href="#"
                        className="button fullfield"
                        title="Opportunities"
                      >
                        {pageTitleBtn}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          <div
            className={`site-content ${
              siteContentClass ? siteContentClass : ""
            }`}
          >
            {children}
          </div>
        </main>

        <Footer1 />
        <BackToTop />
      </div>
    </>
  );
}
