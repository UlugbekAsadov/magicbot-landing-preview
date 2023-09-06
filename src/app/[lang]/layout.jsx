import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.scss";
import { LocaleContextProvider } from "@/context/locale.context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{"Magicbot"}</title>
        <meta
          name="description"
          content="Превратите свой Telegram-бот в полноценный онлайн-магазин
            с Magicstore"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
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
      </head>

      <body className={inter.className}>
        <LocaleContextProvider>{children}</LocaleContextProvider>
      </body>
    </html>
  );
}

export const runtime = "edge";
