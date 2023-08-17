"use client";
import { useLocaleContext } from "@/context/locale.context";

export default function Footer() {
  const { translate } = useLocaleContext();
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="inner">
              <div className=" flex justify-between flex-col md:flex-row !row-gap-4">
                <h6>
                  © {new Date().getFullYear()} Magicbot by Humowels.{" "}
                  {translate("footer.all_secured")}
                </h6>
                <div className="flex gap-2">
                  <a href="">Instagram</a>
                  <a href="">Facebook</a>
                  <a href="">Telegram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
