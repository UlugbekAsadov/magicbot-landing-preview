import { useLocaleContext } from "@/context/locale.context";

export const MagicbotClientsSertion = () => {
  const {} = useLocaleContext();
  return (
    <section className="section spdt">
      <div className="container">
        <div>
          <div className="heading">
            <h2 className="text-center text-[32px] md:text-[40px] font-semibold size-l">
              Magicbot Kimlarga to'g'ri keladi?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2">
            <div className="rounded-xl bg-[var(--sala-shade-background)]  p-3 h-[170px] text-center">
              <h2 className="font-bold mb-2">
                Onlaynda savdoni boshlayotganlarga
              </h2>
              <p>
                Oflaynda ishlab, endi onlaynda ham sotuvni boshlamoqchi
                bo'lganlar uchun hamyonbop narxda bot tayyorlash imkonini
                beramiz
              </p>
            </div>
            <div className=" rounded-xl bg-[var(--sala-shade-background)]  p-3 h-[170px] text-center">
              <h2 className="font-bold mb-2  ">
                Telegramdagi do kon egalariga
              </h2>
              <p>
                Instagram va Telegramdagi guruhlarda savdo gilib, juda ko'p
                vaqtini javob berish uchun sarflayotgan biznes egalarining
                vaqtini tejab beramiz
              </p>
            </div>
            <div className=" rounded-xl bg-[var(--sala-shade-background)]  p-3 h-[170px] text-center">
              <h2 className="font-bold mb-2 col-span-1 md:col-span-2 lg:col-span-1 ">
                Marketpleyslardagi do'konlarga
              </h2>
              <p>
                Turli marketpleyslarda o'z savdosini yo'lga qo'yib, kengaymoqchi
                bo'layotgan do'konlarga telegramda yechim taklif qilamiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
