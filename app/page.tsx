import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Transformation } from "@/components/transformation";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { BackToTop } from "@/components/back-to-top";
import { SectionIndicator } from "@/components/section-indicator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Transformation />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
      <BackToTop />
      <SectionIndicator />
    </div>
  );
}
