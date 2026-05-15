import Header from "@/components/v2/Header";
import Hero from "@/components/v2/Hero";
import TrustBadges from "@/components/v2/TrustBadges";
import Products from "@/components/v2/Products";
import WhyChoose from "@/components/v2/WhyChoose";
import NourishesDaily from "@/components/v2/NourishesDaily";
import BuiltOnTrust from "@/components/v2/BuiltOnTrust";
import AcrossAP from "@/components/v2/AcrossAP";
import Distributor from "@/components/v2/Distributor";
import Testimonials from "@/components/v2/Testimonials";
import Footer from "@/components/v2/Footer";
import DesignSwitcher from "@/components/DesignSwitcher";

export default function V2Page() {
  return (
    <main className="bg-white pb-28">
      <Header />
      <Hero />
      <TrustBadges />
      <Products />
      <WhyChoose />
      <NourishesDaily />
      <BuiltOnTrust />
      <AcrossAP />
      <Distributor />
      <Testimonials />
      <Footer />
      <DesignSwitcher current="v2" />
    </main>
  );
}
