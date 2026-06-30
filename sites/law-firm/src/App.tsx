import { Nav, Cursor } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import TrackRecord from "@/components/TrackRecord";
import Attorneys from "@/components/Attorneys";
import Testimonials from "@/components/Testimonials";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Nav 
        brand={siteContent.brand}
        links={siteContent.nav.links}
        cta={siteContent.nav.cta}
        // Custom styling for the navigation to match the law firm aesthetic
        className="font-display font-medium tracking-wide"
      />
      
      <main>
        <Hero />
        <PracticeAreas />
        <TrackRecord />
        <Attorneys />
        <Testimonials />
        <ConsultationForm />
      </main>
      
      <Footer />
      
      {/* 
        The cursor can remain as a subtle interaction piece, 
        but relies on the default UI configuration. 
      */}
      <Cursor />
    </>
  );
}
