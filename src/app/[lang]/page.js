import Layout from "@/components/layout/Layout";
import App_Showcase_Section1 from "@/components/sections/App_Showcase_Section1";
import App_Showcase_Section2 from "@/components/sections/App_Showcase_Section2";
import App_Showcase_Section3 from "@/components/sections/App_Showcase_Section3";
import App_Showcase_Section4 from "@/components/sections/App_Showcase_Section4";
import App_Showcase_Section5 from "@/components/sections/App_Showcase_Section5";
import App_Showcase_Section6 from "@/components/sections/App_Showcase_Section6";
import App_Showcase_Section9 from "@/components/sections/App_Showcase_Section9";
import App_Showcase_Section10 from "@/components/sections/App_Showcase_Section10";
import App_Showcase_Section7 from "@/components/sections/App_Showcase_Section7";

export default function HomeAppShowcase({ params }) {
  const { lang } = params;
  return (
    <>
      <Layout
        headerClass="is-transparent "
        siteContentClass="pt0 pb0 overflow-hidden"
        lang={lang}
      >
        <App_Showcase_Section1 />
        <App_Showcase_Section2 />
        <App_Showcase_Section3 />
        <App_Showcase_Section4 />
        <App_Showcase_Section5 />
        <App_Showcase_Section6 />
        <App_Showcase_Section7 />
        <App_Showcase_Section9 />
        <App_Showcase_Section10 />
      </Layout>
    </>
  );
}
