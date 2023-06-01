import Layout from "@/app/components/layout/Layout";
import Seo_Section1 from "@/app/components/Seo/Seo_Section1";
import Seo_Section2 from "@/app/components/Seo/Seo_Section2";
import Seo_Section3 from "@/app/components/Seo/Seo_Section3";
import Seo_Section4 from "@/app/components/Seo/Seo_Section4";
import Seo_Section5 from "@/app/components/Seo/Seo_Section5";
import Seo_Section6 from "@/app/components/Seo/Seo_Section6";
import Seo_Section7 from "@/app/components/Seo/Seo_Section7";

function HomeSeo() {
  return (
    <>
      <Layout siteContentClass="pt0 pb0">
        <Seo_Section1 />
        <Seo_Section2 />
        <Seo_Section3 />
        <Seo_Section4 />
        <Seo_Section5 />
        <Seo_Section6 />
        <Seo_Section7 />
      </Layout>
    </>
  );
}

export default HomeSeo;
