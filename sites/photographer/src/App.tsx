import { Nav } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Details from "@/components/Details";

export default function App() {
  return (
    <>
      <Nav 
        brand={siteContent.brand}
        links={siteContent.nav.links}
        cta={siteContent.nav.cta}
        className="font-body text-xs tracking-widest uppercase mix-blend-difference text-surface"
      />
      
      <main>
        <Hero />
        <FeaturedWork />
        <Details />
      </main>
    </>
  );
}
