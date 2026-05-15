import Header from "@/components/v1/Header";
import Hero from "@/components/v1/Hero";
import Story from "@/components/v1/Story";
import Products from "@/components/v1/Products";
import Farmers from "@/components/v1/Farmers";
import Journey from "@/components/v1/Journey";
import Testimonials from "@/components/v1/Testimonials";
import Footer from "@/components/v1/Footer";
import DesignSwitcher from "@/components/DesignSwitcher";

export default function Home() {
  return (
    <main className="bg-vijaya-cream pb-28">
      <Header />
      <Hero />
      <Story />
      <Products />
      <Farmers />
      <Journey />
      <Testimonials />
      <Footer />
      <DesignSwitcher current="v1" />
    </main>
  );
}
