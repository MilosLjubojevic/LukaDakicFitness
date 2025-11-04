import Head from "next/head";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Transformation } from "@/components/transformation";
import { Footer } from "@/components/footer";

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
      <Contact />
      <Footer />
    </div>
  );
}
