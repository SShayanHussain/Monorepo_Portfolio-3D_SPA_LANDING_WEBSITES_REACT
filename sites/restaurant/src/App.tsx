import { Nav, Cursor } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Cursor />
      
      {/* 
        Nav is sticky on this site, per PRD prioritizing the Reserve CTA. 
        It has dark mode support baked into @portfolio/ui, so since our 
        index.html has <html class="dark">, it will style itself perfectly.
      */}
      <Nav 
        brand={siteContent.brand} 
        links={siteContent.nav.links} 
        cta={siteContent.nav.cta} 
      />

      <main>
        <Hero />
        <About />
        <MenuPreview />
        <Gallery />
        <Reservation />
      </main>

      <Footer />
    </>
  );
}
