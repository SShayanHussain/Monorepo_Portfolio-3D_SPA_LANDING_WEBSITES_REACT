import { Nav } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Nav 
        brand={siteContent.brand}
        links={siteContent.nav.links}
        cta={siteContent.nav.cta}
        className="font-display uppercase tracking-widest text-lg mix-blend-difference text-white"
      />
      
      <main>
        <Hero />
        <Stats />
        <Services />
        <QuoteForm />
      </main>
      
      <Footer />
    </>
  );
}
