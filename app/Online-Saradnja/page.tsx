import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import {
  StickyCTA,
  TestimonialCarousel,
  ProcessTimeline,
  QuickWinCTA,
  RelatedTopics,
  InteractiveFAQ,
} from "@/components/topic-page";
import { TopicBottomCTA } from "@/components/topic-page-cta";
import Link from "next/link";
import {
  ChevronRight,
  Globe,
  Check,
  Video,
  MessageSquare,
  Calendar,
  Smartphone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Trening Program | Personalni Trener na Daljinu",
  description:
    "Profesionalni online trening program gde god da se nalaziš. Video demonstracije, nedeljni check-in, aplikacija za praćenje. Ista pažnja kao uživo, bez geografskih ograničenja.",
  keywords: [
    "online trening program",
    "personalni trener online",
    "trening na daljinu",
    "online fitnes program",
    "program treninga kod kuće",
    "virtualni trener",
    "online coaching",
    "fitnes aplikacija",
    "trening bez teretane",
    "kućni trening program",
    "online plan treninga",
    "remote personal training",
  ],
  alternates: {
    canonical: "https://lukadakicpersonalnitrenernovisad.com/Online-Saradnja",
  },
  openGraph: {
    title: "Online Trening Program | Luka Dakić - Personalni Trener",
    description:
      "Profesionalni program treninga gde god da si. Video vežbe, nedeljni check-in, praćenje napretka. Treniraj sa stručnjakom bez obzira na lokaciju.",
    url: "https://lukadakicpersonalnitrenernovisad.com/Online-Saradnja",
    siteName: "Luka Dakić Fitness",
    images: [
      {
        url: "/DakicPozira.jpg",
        width: 1200,
        height: 630,
        alt: "Online trening sa personalnim trenerom Lukom Dakićem",
      },
    ],
    locale: "sr_RS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Trening Program | Personalni Trener na Daljinu",
    description:
      "Profesionalni online program treninga. Video demonstracije, nedeljni check-in, aplikacija za praćenje napretka.",
    images: ["/DakicPozira.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Program Treninga",
  description:
    "Personalizovani online program treninga koji uključuje video demonstracije vežbi, nedeljne check-in pozive, praćenje napretka kroz aplikaciju i stalnu podršku putem poruka.",
  provider: {
    "@type": "Person",
    name: "Luka Dakić",
    url: "https://lukadakicpersonalnitrenernovisad.com",
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  serviceType: "Online Personal Training",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "Online",
    availableLanguage: ["sr", "en"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kako funkcioniše online trening?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nakon uvodnog video poziva i procene, dobijaš personalizovan program u aplikaciji sa video demonstracijama svake vežbe. Treniraš samostalno, unosiš rezultate, a ja pratim tvoj napredak i dajem povratne informacije. Nedeljni check-in osigurava da si na pravom putu.",
      },
    },
    {
      "@type": "Question",
      name: "Da li online trening može biti efikasan kao uživo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Za motivasane ljude koji mogu samostalno da treniraju - apsolutno. Online program daje istu stručnost u planiranju i praćenju, samo bez fizičkog prisustva na treningu. Mnogi klijenti čak preferiraju fleksibilnost koju online saradnja pruža.",
      },
    },
    {
      "@type": "Question",
      name: "Šta mi je potrebno za online trening?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum: pametni telefon za pristup aplikaciji i komunikaciju. Oprema zavisi od programa - može se trenirati samo sa sopstvenom težinom, ili sa opremom koju imaš (bučice, elastične trake, kettlebell). Program prilagođavam onome što imaš na raspolaganju.",
      },
    },
    {
      "@type": "Question",
      name: "Koliko često komuniciramo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Poruke su dostupne svaki dan za brza pitanja. Nedeljni check-in (15-20 min video ili audio poziv) je obavezan deo programa. Mesečno radimo detaljniju analizu napretka i ažuriranje programa.",
      },
    },
    {
      "@type": "Question",
      name: "Da li online saradnja uključuje i plan ishrane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od paketa koji odabereš. Osnovni paket uključuje samo trening, dok premium paket uključuje i kompletni plan ishrane. Možeš početi samo sa treningom i kasnije dodati ishranu ako želiš.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Početna",
      item: "https://lukadakicpersonalnitrenernovisad.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Online Saradnja",
      item: "https://lukadakicpersonalnitrenernovisad.com/Online-Saradnja",
    },
  ],
};

export default function OnlineSaradnjaPage() {
  const benefits = [
    "Personalizovan program u profesionalnoj aplikaciji",
    "Video demonstracija svake vežbe u programu",
    "Nedeljni check-in poziv (video ili audio)",
    "Praćenje napretka i prilagođavanje programa",
    "Podrška putem poruka svakog dana",
    "Fleksibilnost - treniraš kada tebi odgovara",
  ];

  const stats = [
    { icon: Video, value: "100+", label: "Video demonstracija" },
    { icon: MessageSquare, value: "24h", label: "Odgovor na poruke" },
    { icon: Calendar, value: "4", label: "Nedelje po ciklusu" },
    { icon: Smartphone, value: "1", label: "Aplikacija za sve" },
  ];

  const faqs = [
    {
      q: "Kako funkcioniše online trening?",
      a: "Nakon uvodnog poziva dobijaš program u aplikaciji sa video demonstracijama. Treniraš samostalno, unosiš rezultate, ja pratim napredak. Nedeljni check-in osigurava da si na pravom putu.",
    },
    {
      q: "Da li online trening može biti efikasan kao uživo?",
      a: "Za motivasane ljude - apsolutno. Dobijaš istu stručnost u planiranju, samo bez fizičkog prisustva. Mnogi klijenti čak preferiraju fleksibilnost online programa.",
    },
    {
      q: "Šta mi je potrebno za online trening?",
      a: "Minimum: pametni telefon. Oprema zavisi od programa - može se trenirati samo sa sopstvenom težinom ili sa opremom koju imaš. Program prilagođavam.",
    },
    {
      q: "Koliko često komuniciramo?",
      a: "Poruke svaki dan za brza pitanja. Nedeljni check-in (15-20 min) je obavezan. Mesečno detaljna analiza i ažuriranje programa.",
    },
    {
      q: "Da li online saradnja uključuje i plan ishrane?",
      a: "Zavisi od paketa. Osnovni je samo trening, premium uključuje i ishranu. Možeš početi sa treningom i dodati ishranu kasnije.",
    },
  ];

  const testimonials = [
    {
      name: "Milan D.",
      result: "Trenira iz Beča",
      quote: "Preselio sam se u Beč ali nisam hteo da prekinem saradnju sa Lukom. Online program je savršeno rešenje - kao da je tu pored mene, samo preko aplikacije!",
      duration: "Klijent 8 meseci",
    },
    {
      name: "Sara T.",
      result: "-10kg radeći od kuće",
      quote: "Sa dvoje male dece nemam vremena za teretanu. Lukini kućni treninzi od 30 minuta su idealni. Opremila sam ugao sobe bučicama i to je to!",
      duration: "Klijentkinja 5 meseci",
    },
    {
      name: "Aleksandar P.",
      result: "Fleksibilnost bez kompromisa",
      quote: "Putujem konstantno zbog posla. Sa online programom treniram u hotelima širom sveta. Luka prilagođava vežbe prema tome šta imam dostupno.",
      duration: "Klijent 6 meseci",
    },
  ];

  const processSteps = [
    {
      icon: "MessageCircle",
      title: "Besplatan uvodni poziv",
      description: "Upoznajemo se, definišemo ciljeve i proveravamo da li je online za tebe",
      duration: "30 min",
    },
    {
      icon: "ClipboardCheck",
      title: "Upitnik i video analiza",
      description: "Detaljan upitnik o istoriji treniranja i video snimak pokreta",
      duration: "1. nedelja",
    },
    {
      icon: "Play",
      title: "Program u aplikaciji",
      description: "Pristup programu sa video demonstracijama i prostorom za praćenje",
      duration: "1. nedelja",
    },
    {
      icon: "Trophy",
      title: "Nedeljni check-in",
      description: "Redovni pozivi za analizu napretka i prilagođavanje programa",
      duration: "Kontinuirano",
    },
  ];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <StickyCTA
        accentColor="from-purple-500 to-violet-500"
        text="Zakaži poziv"
      />

      <main className="pt-24 pb-0">
        <section className="bg-gradient-to-b from-purple-50/80 via-white to-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-purple-600 transition-colors">
                    Početna
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-gray-900 font-medium">Online saradnja</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                Treniraj Odakle God
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Online Program Treninga
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 mt-2 pb-1">
                Stručna Podrška Bez Granica
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
              Nisi u Novom Sadu? Imaš neregularan raspored? Preferiraš da treniraš sam/a?{" "}
              <strong>Online program</strong> ti daje pristup profesionalnom vođenju bez
              geografskih ograničenja ili fiksnih termina.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 max-w-4xl py-12">
          <QuickWinCTA
            headline="Treniraj bilo gde uz stručnu podršku — zakaži besplatan uvodni poziv"
            benefits={[
              "Program prilagođen tvojoj opremi i lokaciji",
              "Video demonstracije svake vežbe",
              "Nedeljni check-in i stalna podrška",
            ]}
            urgencyText="Fleksibilnost bez kompromisa"
            accentColor="purple"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Za Koga Je Online Trening?
              </h2>
              <p>
                Online saradnja je idealna za ljude koji su{" "}
                <strong>samodisciplinovani i motivasani</strong>, ali im treba stručno
                vođenje u kreiranju programa i praćenju napretka. Ako trebaš nekoga da stoji
                pored tebe i broji ponavljanja — uživo trening je bolji izbor.
              </p>
              <p>
                Ali ako možeš samostalno da završiš trening kada je zakazan, onda online
                program nudi <strong>istu stručnost po pristupačnijoj ceni</strong> i sa
                potpunom fleksibilnošću u rasporedu.
              </p>
              <p>
                Idealno za: <strong>putovanja, rad od kuće, neregularan raspored, život van
                Novog Sada</strong>, ili jednostavno preferiranje samostalnog treniranja.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Šta Dobijate u Online Programu?
              </h2>
              <p>
                Online saradnja <strong>nije „pošalji PDF i zaboravi"</strong>. To je aktivna
                saradnja sa stalnom komunikacijom, praćenjem i prilagođavanjem programa.
              </p>
              <p>
                Program dobijaš u <strong>profesionalnoj aplikaciji</strong> koja uključuje:
                listu vežbi za svaki trening, video demonstraciju svake vežbe, prostor za
                unos rezultata, i grafički prikaz napretka kroz vreme.
              </p>
            </section>
          </div>

          <ProcessTimeline
            steps={processSteps}
            accentColor="purple"
            title="Kako počinje online saradnja?"
            subtitle="Od prvog poziva do samostalnog treniranja za manje od nedelju dana"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Oprema i Lokacija - Šta Ti Treba?
              </h2>
              <p>
                Program prilagođavam <strong>opremi koju imaš na raspolaganju</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Samo sa sopstvenom težinom</strong> — kod kuće, u parku, na putovanju</li>
                <li><strong>Sa minimalnom opremom</strong> — elastične trake, jedan par bučica, kettlebell</li>
                <li><strong>U teretani</strong> — pristup punoj opremi, najfleksibilnije opcije</li>
              </ul>
              <p>
                Ako imaš <strong>kućnu teretanu u izgradnji</strong>, mogu da ti dam preporuke
                šta kupiti u okviru tvog budžeta za maksimalni benefit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Video Analiza Tehnike
              </h2>
              <p>
                Jedna od prednosti online programa je <strong>asinhrona video analiza</strong>.
                Snimiš sebe kako radiš vežbu, pošalješ mi snimak, ja analiziram i šaljem
                povratnu informaciju sa konkretnim korekcijama.
              </p>
              <p>
                Ovo je često <strong>efikasnije od uživo korekcije</strong> jer možeš da
                pogledaš svoj snimak uporedo sa mojim komentarima.
              </p>
            </section>
          </div>

          <TestimonialCarousel
            testimonials={testimonials}
            accentColor="purple"
            title="Priče naših online klijenata"
          />

          <div className="mt-12 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 sm:p-8 border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Šta uključuje online program:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-0.5 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <InteractiveFAQ
            faqs={faqs}
            title="Pitanja o online saradnji"
            accentColor="purple"
          />

          <RelatedTopics currentHref="/Online-Saradnja" />
        </article>

        <TopicBottomCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
