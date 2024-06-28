import { Inter } from "next/font/google";
import Script from "next/script";
import { LocaleContextProvider } from "@/context/locale.context";
import { UtmContextProvider } from "@/context/utm.context";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        <title>{"Magicbot"}</title>
        <meta
          name="description"
          content="Превратите свой Telegram-бот в полноценный онлайн-магазин с Magicstore"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="facebook-domain-verification"
          content="u1q50wffgw3uky83uq0i29gb8ohog5"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CY54FHWERY"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CY54FHWERY', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <Script
          id="facebook-metrics"
          dangerouslySetInnerHTML={{
            __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1585615572223846');
        fbq('track', 'PageView');
       `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=1585615572223846&ev=PageView&noscript=1"
          />
        </noscript>

        <Script
          id="yandex-metrics"
          dangerouslySetInnerHTML={{
            __html: `
         (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
         m[i].l=1*new Date();
         for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
         k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
         (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
         ym(97130109, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
         });`,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/97130109"
              style="position:absolute; left:-9999px;"
              alt=""
            />
          </div>
        </noscript>
        <Script
          id="gtag-metrics"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P3SDK5VG');`,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3SDK5VG"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <LocaleContextProvider>
          <UtmContextProvider>{children}</UtmContextProvider>
        </LocaleContextProvider>
      </body>
    </html>
  );
}

export const runtime = "edge";
