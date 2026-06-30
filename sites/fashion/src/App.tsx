import { Nav } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import Lookbook from "@/components/Lookbook";
import Story from "@/components/Story";
import ProductSpotlight from "@/components/ProductSpotlight";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Nav 
        brand={siteContent.brand}
        links={siteContent.nav.links}
        cta={siteContent.nav.cta}
        className="font-body text-xs tracking-widest uppercase"
      />
      
      <main>
        <Hero />
        <FeaturedCollection />
        <Lookbook />
        <Story />
        <ProductSpotlight />
        <Waitlist />
      </main>
      
      <Footer />
    </>
  );
}
