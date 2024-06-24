"use client";
import Layout from "@/components/layout/layout";
import { useLocaleContext } from "@/context/locale.context";
import { ThemeContextProvider } from "@/context/theme.context";

export default function FormSuccessPage({ params }) {
  const { translate } = useLocaleContext();
  const { lang } = params;

  return (
    <ThemeContextProvider>
      <Layout lang={lang}>
        <div className="container">
          <h2 className="text-3xl  text-center max-w-3xl w-full mx-auto">
            {translate("contact_page.success.title")}
          </h2>
          <p>{translate("contact_page.succes.watch_video")}</p>
        </div>
      </Layout>
    </ThemeContextProvider>
  );
}
