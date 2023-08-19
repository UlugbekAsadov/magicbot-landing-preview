import { Inter } from "next/font/google";

import "./globals.scss";
import { LocaleContextProvider } from "@/context/locale.context";
import { ThemeContextProvider } from "@/context/theme.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Magicbot by Humocommerce",
  description:
    "Превратите свой Telegram-бот в полноценный онлайн-магазин с Magicstore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{"Magicbot"}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <LocaleContextProvider>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </LocaleContextProvider>
      </body>
    </html>
  );
}

export const runtime = "edge";
