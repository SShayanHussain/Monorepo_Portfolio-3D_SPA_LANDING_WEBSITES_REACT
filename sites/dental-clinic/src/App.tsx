import { Nav, Cursor } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import Team from "@/components/Team";
import SmileGallery from "@/components/SmileGallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Nav 
        brand={siteContent.brand}
        links={siteContent.nav.links}
        cta={siteContent.nav.cta}
      />
      
      <main>
        <Hero />
        <Services />
        <Differentiators />
        <Team />
        <SmileGallery />
        <Booking />
      </main>
      
      <Footer />
      
      <Cursor />
    </>
  );
}
