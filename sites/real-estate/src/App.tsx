import { Nav, Cursor } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Cursor />

      {/* Sticky nav keeps the "Schedule a consultation" CTA visible after
          scroll (conversion priority #1). */}
      <Nav
        brand={siteContent.brand}
        links={siteContent.nav.links}
        cta={siteContent.nav.cta}
      />

      <main>
        <Hero />
        <FeaturedListings />
        <Stats />
        <Process />
        <Agents />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
