import { Inter } from "next/font/google";
import "../../public/assets/libs/bootstrap/css/bootstrap.min.css";
import "../../public/assets/libs/line-awesome/css/line-awesome.min.css";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../public/assets/css/style.css";
import "./globals.css";
import { LocaleContextProvider } from "@/context/locale.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="[lang]#" />
      </head>
      <body className={inter.className}>
        <LocaleContextProvider>{children}</LocaleContextProvider>
      </body>
    </html>
  );
}

export const runtime = 'edge'