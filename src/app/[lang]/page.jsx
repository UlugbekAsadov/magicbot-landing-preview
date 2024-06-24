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
import {ThemeContextProvider} from "@/context/theme.context";
import MarketSection from "@/components/sections/market-section";
import SellSection from "@/components/sections/sell-section";
import OurLeadsSection from "@/components/sections/our-leads-section";
import {Footer} from "@/components/sections/footer";
import {Blogs} from "@/components/sections/blogs/blogs-section";
import {MagicbotClientsSertion} from "@/components/sections/magicbot-clients-section";

export default function HomeAppShowcase({params}) {
  const {lang} = params;
  return (
    <ThemeContextProvider>
      <Layout
        headerClass="is-transparent "
        siteContentClass="pt0 pb0 overflow-hidden"
        lang={lang}
      >
        <HeroSection/>
        <StatisticsSection/>
        <MagicbotClientsSertion/>
        <SellSection/>
        <MarketSection/>
        <MarketingSection/>
        <InterfaceSection/>
        <AiSection/>
        <CrmSection/>
        <IntegrationSection/>
        <GuideSection/>
        <OurLeadsSection/>
        <PlansSection/>
        <Blogs/>
        <BannerSection/>
        <Footer/>
      </Layout>
    </ThemeContextProvider>
  );
}
