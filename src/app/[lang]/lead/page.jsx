import Layout from "@/components/new-layout/layout";
import HeroSection from "@/components/new-sections/hero-section";
import StatisticsSection from "@/components/sections/statistics-section";
import MarketingSection from "@/components/sections/marketing-section";
import InterfaceSection from "@/components/sections/interface-section";
import CrmSection from "@/components/sections/crm-section";
import PlansSection from "@/components/new-sections/plans-section";
import BannerSection from "@/components/new-sections/banner-section";
import IntegrationSection from "@/components/sections/integration-section";
import GuideSection from "@/components/sections/guide-section";
import { ThemeContextProvider } from "@/context/theme.context";
import OurLeadsSection from "@/components/sections/our-leads-section";
import { Footer } from "@/components/sections/footer";
import { MagicbotClientsSertion } from "@/components/sections/magicbot-clients-section";
import ContactOne from "@/components/new-sections/lead-form-section";
import { BrandsSection } from "@/components/sections/brands-section";

export default function Page({ params }) {
  const { lang } = params;

  return (
    <ThemeContextProvider>
      <Layout
        headerClass="is-transparent "
        siteContentClass="pt0 pb0 overflow-hidden"
        lang={lang}
      >
        <HeroSection />
        <BrandsSection />
        <StatisticsSection />
        <MagicbotClientsSertion />
        <MarketingSection />
        <InterfaceSection />
        <IntegrationSection />
        <CrmSection />
        <GuideSection />
        <OurLeadsSection />
        <PlansSection />
        <ContactOne />
        <BannerSection />
        <Footer />
      </Layout>
    </ThemeContextProvider>
  );
}
