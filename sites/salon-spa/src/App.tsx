import { Nav, Cursor } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Stylists from "@/components/Stylists";
import Testimonials from "@/components/Testimonials";
import BookingFooter from "@/components/BookingFooter";

export default function App() {
  return (
    <>
      <Nav 
        brand={siteContent.brand}
        links={siteContent.nav.links}
        cta={siteContent.nav.cta}
        className="font-body text-sm font-medium tracking-widest uppercase"
      />
      
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Stylists />
        <Testimonials />
      </main>
      
      <BookingFooter />
      
      <Cursor />
    </>
  );
}
