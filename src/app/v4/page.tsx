import Header from "@/components/v4/Header";
import Hero from "@/components/v4/Hero";
import StatsBand from "@/components/v4/StatsBand";
import FounderQuote from "@/components/v4/FounderQuote";
import TrustPillars from "@/components/v4/TrustPillars";
import Products from "@/components/v4/Products";
import WelfarePrograms from "@/components/v4/WelfarePrograms";
import FarmerStory from "@/components/v4/FarmerStory";
import Journey from "@/components/v4/Journey";
import AcrossAndhra from "@/components/v4/AcrossAndhra";
import SocialFeed from "@/components/v4/SocialFeed";
import Testimonials from "@/components/v4/Testimonials";
import AnnualReport from "@/components/v4/AnnualReport";
import DistributorCTA from "@/components/v4/DistributorCTA";
import Footer from "@/components/v4/Footer";
import DesignSwitcher from "@/components/DesignSwitcher";

export default function V4Page() {
  return (
    <main className="bg-vijaya-paperFlag pb-28 text-vijaya-inkWarm">
      <Header />
      <Hero />
      <StatsBand />
      <FounderQuote />
      <TrustPillars />
      <Products />
      <WelfarePrograms />
      <FarmerStory />
      <Journey />
      <AcrossAndhra />
      <SocialFeed />
      <Testimonials />
      <AnnualReport />
      <DistributorCTA />
      <Footer />
      <DesignSwitcher current="v4" />
    </main>
  );
}
