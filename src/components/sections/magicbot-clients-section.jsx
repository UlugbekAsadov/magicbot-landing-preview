"use client";
import { useLocaleContext } from "@/context/locale.context";

export const MagicbotClientsSertion = () => {
  const { translate } = useLocaleContext();
  return (
    <section className="section spdt">
      <div className="container">
        <div>
          <div className="heading">
            <h2 className="text-center text-[32px] md:text-[40px] font-semibold size-l">
              {translate("who_is_magicbot_for.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2">
            <div className="rounded-xl bg-[var(--sala-shade-background)]  p-3 h-[170px] text-center">
              <h2 className="font-bold mb-2">
                {translate("who_is_magicbot_for.col_1.title")}
              </h2>
              <p>{translate("who_is_magicbot_for.col_1.description")}</p>
            </div>
            <div className=" rounded-xl bg-[var(--sala-shade-background)]  p-3 h-[170px] text-center">
              <h2 className="font-bold mb-2  ">
                {translate("who_is_magicbot_for.col_2.title")}
              </h2>
              <p>{translate("who_is_magicbot_for.col_2.description")}</p>
            </div>
            <div className=" rounded-xl bg-[var(--sala-shade-background)]  p-3 h-[170px] text-center">
              <h2 className="font-bold mb-2 col-span-1 md:col-span-2 lg:col-span-1 ">
                {translate("who_is_magicbot_for.col_3.title")}
              </h2>
              <p>{translate("who_is_magicbot_for.col_3.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
