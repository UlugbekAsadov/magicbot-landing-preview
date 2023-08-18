import Layout from "@/components/layout/layout";
import HeroSection from "@/components/sections/hero-section";
import StatisticsSection from "@/components/sections/statistics-section";
import MarketingSection from "@/components/sections/marketing-section";
import InterfaceSection from "@/components/sections/interface-section";
import AiSection from "@/components/sections/ai-section";
import CrmSection from "@/components/sections/crm-section";
import PlansSection from "@/components/sections/plans-section";
import BannerSection from "@/components/sections/banner-section";
import IntegrationSection from "@/components/sections/integration-section";
import GuideSection from "@/components/sections/guide-section";

export default function HomeAppShowcase({ params }) {
  const { lang } = params;
  return (
    <Layout
      headerClass="is-transparent "
      siteContentClass="pt0 pb0 overflow-hidden"
      lang={lang}
    >
      <HeroSection />
      <StatisticsSection />
      <MarketingSection />
      <InterfaceSection />
      <AiSection />
      <CrmSection />
      <IntegrationSection />
      <GuideSection />
      <PlansSection />
      <BannerSection />
    </Layout>
  );
}
