import { Nav } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Nav 
        brand={siteContent.brand}
        links={siteContent.nav.links}
        cta={siteContent.nav.cta}
        className="font-body text-sm font-bold tracking-widest uppercase"
      />
      
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <QuoteForm />
      </main>
      
      <Footer />
    </>
  );
}
