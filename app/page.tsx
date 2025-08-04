import Head from 'next/head';
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Personalni Trener | Fit sa Lukom</title>
        <meta name="description" content="Ostvari svoje fitness ciljeve uz personalizirane treninge sa licenciranim trenerom iz Srbije. Zakazivanje putem Vibera ili WhatsApp-a." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags for better social sharing */}
        <meta property="og:title" content="Personalni Trener | Fit sa Lukom" />
        <meta property="og:description" content="Individualni i grupni treninzi, personalizovani planovi vežbanja, saveti o ishrani i lični pristup za sve uzraste. Kontaktiraj Luku već danas!"/>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sr_RS" />
        
        {/* Optional: favicon and charset */}
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
