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
  HeartPulse,
  Check,
  Shield,
  Activity,
  Sparkles,
  UserCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Korektivne Vežbe Novi Sad | Rehabilitacija i Bol u Leđima",
  description:
    "NASM Corrective Exercise Specialist. Rešavanje bolova u leđima, oporavak nakon povrede, ispravka posture i skolioze. Funkcionalni trening za život bez bola.",
  keywords: [
    "korektivne vežbe Novi Sad",
    "bol u leđima vežbe",
    "rehabilitacija nakon povrede",
    "ispravka posture",
    "skolioza vežbe",
    "kifoza vežbe",
    "mobilnost zglobova",
    "funkcionalni trening",
    "fizikalna terapija trening",
    "bol u kičmi rešenje",
    "oporavak koleno",
    "NASM CES",
  ],
  alternates: {
    canonical:
      "https://lukadakicpersonalnitrenernovisad.com/Zdravlje-i-Funkcionalnost",
  },
  openGraph: {
    title: "Korektivne Vežbe i Rehabilitacija | Luka Dakić - NASM CES",
    description:
      "Specijalizovan za korektivne vežbe i rehabilitaciju. Rešavanje bolova u leđima, oporavak nakon povrede, poboljšanje posture. NASM Corrective Exercise Specialist.",
    url: "https://lukadakicpersonalnitrenernovisad.com/Zdravlje-i-Funkcionalnost",
    siteName: "Luka Dakić Fitness",
    images: [
      {
        url: "/DakicPozira.jpg",
        width: 1200,
        height: 630,
        alt: "Korektivne vežbe sa NASM sertifikovanim trenerom",
      },
    ],
    locale: "sr_RS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korektivne Vežbe Novi Sad | Rehabilitacija i Mobilnost",
    description:
      "NASM Corrective Exercise Specialist. Bolovi u leđima, oporavak, postura. Funkcionalni trening za život bez bola.",
    images: ["/DakicPozira.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Korektivne Vežbe i Funkcionalni Trening",
  description:
    "Specijalizovane korektivne vežbe za rešavanje bolova u leđima, rehabilitaciju nakon povreda, ispravku posture i skolioze. NASM Corrective Exercise Specialist sertifikacija.",
  provider: {
    "@type": "Person",
    name: "Luka Dakić",
    jobTitle: "NASM Corrective Exercise Specialist",
    url: "https://lukadakicpersonalnitrenernovisad.com",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "NASM Corrective Exercise Specialist (CES)",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Novi Sad",
  },
  serviceType: "Corrective Exercise and Rehabilitation Training",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Da li vežbanje može zaista pomoći kod bolova u leđima?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, istraživanja pokazuju da je pravilno doziran trening efikasniji od lekova i pasivnog odmora za većinu bolova u leđima. Ključ je u jačanju stabilizatora kičme i korekciji pokretnih obrazaca koji uzrokuju bol.",
      },
    },
    {
      "@type": "Question",
      name: "Kada mogu početi sa treningom nakon operacije kolena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To zavisi od tipa operacije i preporuke hirurga. Obično se sa laganim vežbama može početi 6-12 nedelja nakon operacije. Radim u koordinaciji sa vašim lekarom/fizioterapeutom kako bismo obezbedili bezbedan oporavak.",
      },
    },
    {
      "@type": "Question",
      name: "Da li korektivne vežbe pomažu kod skolioze kod odraslih?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kod odraslih ne možemo ispraviti strukturnu skoliozu, ali možemo značajno smanjiti bol i poboljšati funkcionalnost. Jačanjem mišića koji podržavaju kičmu i istezanjem skraćenih struktura postižemo bolji balans i manje tegobe.",
      },
    },
    {
      "@type": "Question",
      name: "Šta je NASM CES sertifikacija?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NASM Corrective Exercise Specialist je međunarodno priznata sertifikacija za trenere specijalizovane za procenu pokreta, identifikaciju mišićnih disbalansa i kreiranje korektivnih programa. Ova sertifikacija mi omogućava da radim sa klijentima koji imaju bolove ili ograničenja u kretanju.",
      },
    },
    {
      "@type": "Question",
      name: "Koliko dugo traje da se vide rezultati kod bolova?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mnogi klijenti prijavljuju smanjenje bola već nakon 2-3 nedelje redovnog vežbanja. Trajnije promene u posturi i pokretljivosti zahtevaju 8-12 nedelja doslednog rada. Ključ je strpljenje i redovnost.",
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
      name: "Zdravlje i Funkcionalnost",
      item: "https://lukadakicpersonalnitrenernovisad.com/Zdravlje-i-Funkcionalnost",
    },
  ],
};

export default function ZdravljeIFunkcionalnostPage() {
  const benefits = [
    "NASM Corrective Exercise Specialist sertifikacija",
    "Detaljna procena pokretljivosti i mišićnih disbalansa",
    "Vežbe prilagođene tvom zdravstvenom stanju i ograničenjima",
    "Koordinacija sa fizioterapeutom ili lekarom kada je potrebno",
    "Postepen pristup bez rizika od pogoršanja stanja",
    "Edukacija o pravilnom držanju i svakodnevnim navikama",
  ];

  const stats = [
    { icon: Shield, value: "NASM", label: "CES Sertifikacija" },
    { icon: Activity, value: "85%", label: "Smanjenje bola" },
    { icon: Sparkles, value: "2-3", label: "Nedelje do olakšanja" },
    { icon: UserCheck, value: "40+", label: "Rehabilitovanih klijenata" },
  ];

  const faqs = [
    {
      q: "Da li vežbanje može zaista pomoći kod bolova u leđima?",
      a: "Da, istraživanja pokazuju da je pravilno doziran trening efikasniji od lekova i pasivnog odmora. Ključ je u jačanju stabilizatora kičme i korekciji pokretnih obrazaca.",
    },
    {
      q: "Kada mogu početi sa treningom nakon operacije kolena?",
      a: "Zavisi od tipa operacije - obično 6-12 nedelja nakon. Radim u koordinaciji sa vašim lekarom kako bismo obezbedili bezbedan oporavak.",
    },
    {
      q: "Da li korektivne vežbe pomažu kod skolioze kod odraslih?",
      a: "Ne možemo ispraviti strukturnu skoliozu, ali značajno smanjujemo bol i poboljšavamo funkcionalnost jačanjem mišića koji podržavaju kičmu.",
    },
    {
      q: "Šta je NASM CES sertifikacija?",
      a: "Međunarodno priznata sertifikacija za trenere specijalizovane za procenu pokreta, identifikaciju mišićnih disbalansa i kreiranje korektivnih programa.",
    },
    {
      q: "Koliko dugo traje da se vide rezultati kod bolova?",
      a: "Mnogi klijenti prijavljuju smanjenje bola već nakon 2-3 nedelje. Trajnije promene zahtevaju 8-12 nedelja doslednog rada.",
    },
  ];

  const testimonials = [
    {
      name: "Dragan M.",
      result: "Bez bolova u leđima",
      quote:
        "Godinama sam se mučio sa bolovima u donjem delu leđa. Posle 6 nedelja sa Lukom, prvi put mogu normalno da se sagnem. Naučio sam vežbe koje radim i kod kuće.",
      duration: "Klijent 3 meseca",
    },
    {
      name: "Ivana S.",
      result: "Oporavak nakon ACL",
      quote:
        "Operisala sam prednji ukršteni ligament i bilo me je strah da se vratim treningu. Luka je bio strpljiv i pažljiv, a danas trčim bolje nego pre povrede!",
      duration: "Klijentkinja 8 meseci",
    },
    {
      name: "Petar K.",
      result: "Ispravljena postura",
      quote:
        "Radim za računarom 10+ sati dnevno i imao sam užasno držanje. Posle programa sa Lukom, kolegice su primetile da stojim potpuno drugačije. Ramena su mi konačno nazad.",
      duration: "Klijent 4 meseca",
    },
  ];

  const processSteps = [
    {
      icon: "MessageCircle",
      title: "Razgovor o tegobama",
      description: "Detaljno prolazimo kroz tvoju istoriju bola i ograničenja",
      duration: "30 min",
    },
    {
      icon: "Search",
      title: "Procena pokreta",
      description:
        "Testiranje mobilnosti, stabilnosti i identifikacija disbalansa",
      duration: "1. nedelja",
    },
    {
      icon: "ClipboardCheck",
      title: "Korektivni program",
      description: "Vežbe dizajnirane specifično za tvoje stanje",
      duration: "1. nedelja",
    },
    {
      icon: "Trophy",
      title: "Progresija ka cilju",
      description: "Postepeno vraćamo funkcionalnost i smanjujemo bol",
      duration: "6-12 nedelja",
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
        accentColor="from-rose-500 to-pink-500"
        text="Zakaži procenu"
      />

      <main className="pt-24 pb-0">
        <section className="bg-gradient-to-b from-rose-50/80 via-white to-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1 text-sm text-gray-500">
                <li>
                  <Link
                    href="/"
                    className="hover:text-rose-600 transition-colors"
                  >
                    Početna
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-gray-900 font-medium">
                  Zdravlje i funkcionalnost
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-rose-600" />
              </div>
              <span className="text-sm font-semibold text-rose-600 uppercase tracking-wider">
                Korektivni Trening
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Korektivne Vežbe i Rehabilitacija
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mt-2 pb-1">
                Život Bez Bola i Ograničenja
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
              Kao <strong>NASM Corrective Exercise Specialist</strong>,
              specijalizovan sam za rad sa ljudima koji imaju{" "}
              <strong>bolove, povrede ili posturalne probleme</strong>. Cilj
              nije samo ublažiti simptome — već otkriti i rešiti uzrok.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-5 h-5 text-rose-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 max-w-4xl py-12">
          <QuickWinCTA
            headline="Živiš sa bolom? Zakaži besplatnu procenu i saznaj kako možemo pomoći"
            benefits={[
              "Detaljna analiza tvog stanja",
              "Identifikacija uzroka problema",
              "Plan korektivnih vežbi",
            ]}
            urgencyText="Specijalizovan NASM CES pristup"
            accentColor="rose"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Rešavanje Bolova u Leđima i Kičmi
              </h2>
              <p>
                <strong>Bol u donjem delu leđa</strong> je najčešći razlog za
                odsustvo sa posla u modernom svetu. Sedi se previše, kreće
                premalo, a kada se krene — često nepravilno. Rezultat: hronični
                bol koji ograničava svakodnevni život.
              </p>
              <p>
                Moj pristup se bazira na{" "}
                <strong>NASM korektivnom modelu</strong>: prvo identifikujemo
                koje mišićne grupe su skraćene, a koje oslabljene. Zatim
                kreiramo program koji kombinuje istezanje, aktivaciju i jačanje
                — sve u pravom redosledu za maksimalni efekat.
              </p>
              <p>
                Rezultat?{" "}
                <strong>
                  85% mojih klijenata prijavljuje značajno smanjenje bola
                </strong>{" "}
                u prvih 4-6 nedelja. Ne maskiramo simptome — rešavamo uzrok.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Oporavak Nakon Povrede ili Operacije
              </h2>
              <p>
                <strong>Povratak u aktivnost nakon povrede</strong> je proces
                koji zahteva strpljenje i stručnost. Prebrzo vraćanje dovodi do
                ponovne povrede; presporo — do gubitka mišićne mase i
                pokretljivosti.
              </p>
              <p>
                Radim sa klijentima koji se oporavljaju od{" "}
                <strong>
                  operacije kolena (ACL, meniskus), ramena (rotatorska
                  manžetna), kičme (diskus hernija)
                </strong>{" "}
                i drugih povreda. Program se pravi u koordinaciji sa vašim
                lekarom.
              </p>
            </section>
          </div>

          <ProcessTimeline
            steps={processSteps}
            accentColor="rose"
            title="Put ka životu bez bola"
            subtitle="Sistematičan korektivni pristup koji rešava uzrok, ne samo simptome"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Korekcija Posture - Skolioza, Kifoza, Lordoza
              </h2>
              <p>
                <strong>Loše držanje</strong> nije samo estetski problem —
                dovodi do bolova, glavobolja, smanjene energije i povećanog
                rizika od povreda. Danas, kada većina ljudi provodi 8+ sati
                dnevno u sedećem položaju, posturalni problemi su epidemija.
              </p>
              <p>
                Kroz detaljnu <strong>posturalnu procenu</strong> identifikujem
                specifične devijacije: zaobljena ramena, anteriorna nagnutost
                karlice, povećana kifoza ili lordoza. Zatim kreiram program koji
                cilja tačno te probleme.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Mobilnost i Fleksibilnost za Svakodnevni Život
              </h2>
              <p>
                <strong>Ukočeni kukovi, bolna ramena, ograničen vrat</strong> —
                sve su to signali da telo vapi za pažnjom. Program mobilnosti
                nije luksuz za sportiste — neophodnost je za svakoga ko želi da
                se kreće bez bola.
              </p>
              <p>
                Kombinujem{" "}
                <strong>
                  dinamičko istezanje, miofascijalnu relaksaciju (foam rolling),
                  aktivne vežbe mobilnosti
                </strong>{" "}
                i proprioceptivni trening.
              </p>
            </section>
          </div>

          <TestimonialCarousel
            testimonials={testimonials}
            accentColor="rose"
            title="Priče oporavka naših klijenata"
          />

          <div className="mt-12 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-rose-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Zašto izabrati mene za korektivni trening:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-0.5 w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <InteractiveFAQ
            faqs={faqs}
            title="Pitanja o korektivnom treningu"
            accentColor="rose"
          />

          <RelatedTopics currentHref="/Zdravlje-i-Funkcionalnost" />
        </article>

        <TopicBottomCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
