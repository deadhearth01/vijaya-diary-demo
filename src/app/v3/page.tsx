import Header from "@/components/v3/Header";
import Hero from "@/components/v3/Hero";
import StatsBand from "@/components/v3/StatsBand";
import TrustPillars from "@/components/v3/TrustPillars";
import Products from "@/components/v3/Products";
import PremiumJourney from "@/components/v3/PremiumJourney";
import EmpoweringFarmers from "@/components/v3/EmpoweringFarmers";
import Testimonials from "@/components/v3/Testimonials";
import SocialFeed from "@/components/v3/SocialFeed";
import DistributorCTA from "@/components/v3/DistributorCTA";
import Footer from "@/components/v3/Footer";
import DesignSwitcher from "@/components/DesignSwitcher";

export default function V3Page() {
  return (
    <main className="bg-vijaya-forestDeep pb-28 text-vijaya-ivory">
      <Header />
      <Hero />
      <StatsBand />
      <TrustPillars />
      <Products />
      <PremiumJourney />
      <EmpoweringFarmers />
      <Testimonials />
      <SocialFeed />
      <DistributorCTA />
      <Footer />
      <DesignSwitcher current="v3" />
    </main>
  );
}
