import { Nav } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import StatsBar from "@/components/StatsBar";
import Process from "@/components/Process";
import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
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
        <FeaturedListings />
        <StatsBar />
        <Process />
        <Agents />
        <Testimonials />
        <ContactForm />
      </main>
      
      <Footer />
    </>
  );
}
