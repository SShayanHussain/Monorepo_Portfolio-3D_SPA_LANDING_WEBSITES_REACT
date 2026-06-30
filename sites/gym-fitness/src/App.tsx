import { Nav, Cursor } from "@portfolio/ui";
import { siteContent } from "@/data/content";

import Hero from "@/components/Hero";
import Classes from "@/components/Classes";
import Trainers from "@/components/Trainers";
import Memberships from "@/components/Memberships";
import SocialProof from "@/components/SocialProof";
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
        <Classes />
        <Trainers />
        <Memberships />
        <SocialProof />
      </main>
      
      <Footer />
      
      <Cursor />
    </>
  );
}
