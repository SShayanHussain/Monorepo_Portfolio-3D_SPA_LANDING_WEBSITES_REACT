import { Nav, Cursor } from "@portfolio/ui";
import { siteContent } from "@/data/content";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const { nav, brand } = siteContent;

export default function App() {
  return (
    <>
      <Cursor />
      <Nav
        brand={<span className="text-gradient font-bold">{brand}</span>}
        links={nav.links}
        cta={nav.cta}
      />

      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
