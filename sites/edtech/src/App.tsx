import { Nav } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Curriculum from "@/components/Curriculum";
import Instructor from "@/components/Instructor";
import Logistics from "@/components/Logistics";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Nav 
        brand={siteContent.brand}
        links={siteContent.nav.links}
        cta={siteContent.nav.cta}
        className="font-display text-sm font-bold tracking-widest uppercase"
      />
      
      <main>
        <Hero />
        <StatsBar />
        <Curriculum />
        <Instructor />
        <Logistics />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      
      <Footer />
    </>
  );
}
