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
  Zap,
  Check,
  Target,
  Award,
  Timer,
  Flame,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trening Snage Novi Sad | Powerlifting i Sportske Performanse",
  description:
    "Povećaj snagu, eksplozivnost i atletske performanse. Čučanj, mrtvo dizanje, bench press - programi za sportiste i takmičare. NASM sertifikovani trener sa iskustvom u pripremi za fizičke testove.",
  keywords: [
    "trening snage Novi Sad",
    "powerlifting Novi Sad",
    "eksplozivnost trening",
    "sportske performanse",
    "priprema za takmičenje",
    "fizički test priprema",
    "čučanj program",
    "mrtvo dizanje tehnika",
    "bench press",
    "atletski trening",
    "kondicioni trening",
    "HIIT trening Novi Sad",
  ],
  alternates: {
    canonical:
      "https://lukadakicpersonalnitrenernovisad.com/Snaga-i-Performanse",
  },
  openGraph: {
    title: "Trening Snage i Performanse | Luka Dakić - Personalni Trener",
    description:
      "Ekspertni programi za povećanje snage, eksplozivnosti i atletskih performansi. Priprema za sportska takmičenja i fizičke testove. NASM sertifikovani trener.",
    url: "https://lukadakicpersonalnitrenernovisad.com/Snaga-i-Performanse",
    siteName: "Luka Dakić Fitness",
    images: [
      {
        url: "/DakicPozira.jpg",
        width: 1200,
        height: 630,
        alt: "Trening snage sa personalnim trenerom Lukom Dakićem",
      },
    ],
    locale: "sr_RS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trening Snage Novi Sad | Powerlifting i Atletske Performanse",
    description:
      "Povećaj snagu i eksplozivnost uz NASM sertifikovanog trenera. Programi za sportiste i takmičare.",
    images: ["/DakicPozira.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Trening Snage i Performansi",
  description:
    "Profesionalni programi treninga snage uključujući powerlifting, eksplozivnost, kondiciju i pripremu za sportska takmičenja i fizičke testove.",
  provider: {
    "@type": "Person",
    name: "Luka Dakić",
    jobTitle: "NASM Certified Personal Trainer",
    url: "https://lukadakicpersonalnitrenernovisad.com",
  },
  areaServed: {
    "@type": "City",
    name: "Novi Sad",
  },
  serviceType: "Strength and Performance Training",
  offers: {
    "@type": "Offer",
    price: "20",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko brzo mogu povećati snagu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Početnici mogu očekivati značajno povećanje snage već u prvih 4-8 nedelja zahvaljujući neuralnim adaptacijama. Iskusniji vežbači napreduju sporije ali stabilnije. Ključ je progresivno opterećenje i pravilna tehnika.",
      },
    },
    {
      "@type": "Question",
      name: "Da li je powerlifting opasan za kičmu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne, powerlifting uz pravilnu tehniku i progresiju zapravo jača kičmu i smanjuje rizik od povreda. Problem nastaje samo kod nepravilne forme ili prebrzog povećanja težine. Zato je stručno vođenje ključno.",
      },
    },
    {
      "@type": "Question",
      name: "Kako se pripremiti za policijski ili vojni fizički test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Priprema uključuje specifičan program koji simulira zahteve testa - sklekovi, trbušnjaci, trčanje, prepreke. Program se periodizuje tako da budeš na vrhuncu forme na dan testa. Obično je potrebno 8-12 nedelja pripreme.",
      },
    },
    {
      "@type": "Question",
      name: "Da li mogu kombinovati trening snage sa drugim sportom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apsolutno. Trening snage je temelj za gotovo svaki sport. Program se prilagođava tvom primarnom sportu, sezoni i rasporedu utakmica/takmičenja tako da snaga bude podrška, ne smetnja.",
      },
    },
    {
      "@type": "Question",
      name: "Šta ako nikad nisam radio čučanj ili mrtvo dizanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upravo takvi klijenti imaju najviše koristi od stručnog vođenja. Počinjemo od osnova - mobilnost, stabilnost, tehnika sa šipkom bez tegova. Kada savladaš pravilnu formu, postepeno dodajemo opterećenje.",
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
      name: "Snaga i Performanse",
      item: "https://lukadakicpersonalnitrenernovisad.com/Snaga-i-Performanse",
    },
  ],
};

export default function SnagaIPerformansePage() {
  const benefits = [
    "Progresivni plan baziran na dokazanim metodama treninga snage",
    "Testiranje maksimalne snage i praćenje ključnih parametara",
    "Video analiza tehnike za bezbedan napredak",
    "Periodizacija prilagođena tvojim takmičenjima ili testovima",
    "Kombinovanje treninga snage sa specifičnim sportom",
    "Pristup ekspertizi NASM sertifikovanog trenera",
  ];

  const stats = [
    { icon: Target, value: "50+", label: "Sportista pripremljeno" },
    { icon: Award, value: "100%", label: "Prolaznost na testovima" },
    { icon: Timer, value: "8-12", label: "Nedelja do cilja" },
    { icon: Flame, value: "30%", label: "Prosečan rast snage" },
  ];

  const faqs = [
    {
      q: "Koliko brzo mogu povećati snagu?",
      a: "Početnici vide značajan napredak u 4-8 nedelja zahvaljujući neuralnim adaptacijama. Iskusniji vežbači napreduju sporije ali stabilnije uz pravilnu periodizaciju.",
    },
    {
      q: "Da li je powerlifting opasan za kičmu?",
      a: "Ne uz pravilnu tehniku. Powerlifting zapravo jača kičmu i smanjuje rizik od povreda. Problem nastaje samo kod nepravilne forme ili prebrzog povećanja težine.",
    },
    {
      q: "Kako se pripremiti za policijski ili vojni fizički test?",
      a: "Program uključuje specifične vežbe koje simuliraju zahteve testa. Periodizujemo trening tako da budeš na vrhuncu forme na dan testa - obično 8-12 nedelja pripreme.",
    },
    {
      q: "Da li mogu kombinovati trening snage sa drugim sportom?",
      a: "Apsolutno. Program se prilagođava tvom primarnom sportu, sezoni i rasporedu takmičenja tako da snaga bude podrška, ne smetnja.",
    },
    {
      q: "Šta ako nikad nisam radio čučanj ili mrtvo dizanje?",
      a: "Upravo takvi klijenti imaju najviše koristi. Počinjemo od osnova - mobilnost, tehnika bez tegova. Kada savladaš formu, postepeno dodajemo opterećenje.",
    },
  ];

  const testimonials = [
    {
      name: "Nikola S.",
      result: "Položio MUP test",
      quote:
        "Imao sam 8 nedelja do testa za policiju. Luka je napravio program koji je bio fokusiran baš na zahteve testa. Položio sam iz prvog pokušaja sa odličnim rezultatom!",
      duration: "Klijent 2 meseca",
    },
    {
      name: "Marko T.",
      result: "+40kg na čučnju",
      quote:
        "Godinama sam radio čučanj pogrešno. Tek kad je Luka ispravio moju tehniku, snaga je počela da raste bez bolova u leđima. Prezadovoljan sam napretkom.",
      duration: "Klijent 4 meseca",
    },
    {
      name: "Ana P.",
      result: "Pobeda na takmičenju",
      quote:
        "Kao rukometašica trebala mi je eksplozivnost i izdržljivost. Program je bio savršeno usklađen sa sezonom i utakmicama. Nikad nisam bila u boljoj formi!",
      duration: "Klijentkinja 6 meseci",
    },
  ];

  const processSteps = [
    {
      icon: "MessageCircle",
      title: "Analiza ciljeva",
      description: "Definišemo tvoj cilj - test, takmičenje ili lični rekord",
      duration: "30 min",
    },
    {
      icon: "ClipboardCheck",
      title: "Testiranje snage",
      description: "Utvrđujemo trenutne maksimume i slabe tačke",
      duration: "1. nedelja",
    },
    {
      icon: "Dumbbell",
      title: "Periodizovan program",
      description: "Plan sa preciznim procentima, serijama i ponavljanjima",
      duration: "1. nedelja",
    },
    {
      icon: "Trophy",
      title: "Peak performanse",
      description: "Gradimo formu ka tvom velikom danu ili cilju",
      duration: "8-12 nedelja",
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
        accentColor="from-orange-500 to-amber-500"
        text="Zakaži analizu"
      />

      <main className="pt-24 pb-0">
        <section className="bg-gradient-to-b from-orange-50/80 via-white to-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1 text-sm text-gray-500">
                <li>
                  <Link
                    href="/"
                    className="hover:text-orange-600 transition-colors"
                  >
                    Početna
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-gray-900 font-medium">
                  Snaga i performanse
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                Atletski Trening
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trening Snage i Performansi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mt-2 pb-1">
                Postani Jači, Brži, Eksplozivniji
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
              Bilo da se spremaš za <strong>sportsko takmičenje</strong>,{" "}
              <strong>policijski test</strong> ili jednostavno želiš{" "}
              <strong>podići svoje limite</strong> — programi su dizajnirani da
              izvuku maksimum iz tvog potencijala.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-5 h-5 text-orange-600 mx-auto mb-2" />
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
            headline="Spremaš se za test ili takmičenje? Zakaži besplatnu analizu i dobij plan akcije"
            benefits={[
              "Analiza trenutne forme i ciljeva",
              "Pregled zahteva testa/takmičenja",
              "Personalizovana strategija pripreme",
            ]}
            urgencyText="Garantovani rezultati ili vračamo novac"
            accentColor="orange"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Powerlifting i Bazična Snaga
              </h2>
              <p>
                <strong>Čučanj, mrtvo dizanje, bench press</strong> — tri vežbe
                koje grade temelje atletske snage. Svaka od njih aktivira
                desetine mišićnih grupa istovremeno i stvara hormonalni odgovor
                koji ubrzava rast snage i mišića.
              </p>
              <p>
                Kao NASM sertifikovani trener sa specijalizacijom za korektivne
                vežbe, fokus stavljam na{" "}
                <strong>savršenu tehniku pre dodavanja težine</strong>. Povrede
                se dešavaju kada ego preuzme kontrolu — moj posao je da te
                zaštitim od toga i osiguram dugoročan napredak.
              </p>
              <p>
                Program prati tvoj <strong>1RM (one-rep max)</strong> u svakoj
                vežbi i koristi procenat maksimuma za precizno doziranje
                intenziteta. Nema nagađanja — svaki trening ima tačno definisanu
                težinu, broj serija i ponavljanja.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Eksplozivnost za Sportiste
              </h2>
              <p>
                <strong>Vertikalni skok, sprint, brza promena pravca</strong> —
                sve zavisi od sposobnosti mišića da proizvedu silu u minimalnom
                vremenu. Pliometrijski trening i olimpijska dizanja su ključ za
                razvoj eksplozivne snage.
              </p>
              <p>
                Program uključuje{" "}
                <strong>
                  box jumpove, medicine ball bacanja, clean i snatch varijacije
                </strong>{" "}
                — sve prilagođeno tvom sportu. Košarkaš dobija drugačiji program
                od borca ili rukometaša jer su zahtevi različiti.
              </p>
            </section>
          </div>

          <ProcessTimeline
            steps={processSteps}
            accentColor="orange"
            title="Put do maksimalne snage"
            subtitle="Sistematičan pristup koji garantuje rezultate bez povreda"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Priprema za Fizičke Testove
              </h2>
              <p>
                <strong>Policija, vojska, vatrogasci, obezbeđenje</strong> — svi
                imaju specifične fizičke testove koje moraš proći. Pripremio sam
                desetine kandidata sa <strong>95% uspešnosti</strong> na prvom
                pokušaju.
              </p>
              <p>
                Program se bazira na analizi konkretnog testa: sklekovi,
                trbušnjaci, zgibovi, trčanje na vreme, prepreke. Simuliramo test
                uslove tokom treninga tako da na dan provere nema iznenađenja.
              </p>
              <p>
                <strong>Periodizacija je ključna</strong> — gradimo bazu
                izdržljivosti, zatim specifičnu snagu, i završavamo fazom
                održavanja forme neposredno pre testa. Svaka faza ima tačno
                definisano trajanje i ciljeve.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                HIIT i Metabolički Trening
              </h2>
              <p>
                Visoko-intenzivni intervalni trening (<strong>HIIT</strong>) je
                najefikasniji način za poboljšanje kardiovaskularnog kapaciteta
                bez gubitka mišićne mase. Kratki, intenzivni intervali praćeni
                aktivnim odmorom.
              </p>
              <p>
                Koristim{" "}
                <strong>
                  Tabata protokol, EMOM (every minute on the minute), AMRAP (as
                  many reps as possible)
                </strong>{" "}
                i kružne treninge — sve prilagođeno tvom trenutnom nivou
                kondicije.
              </p>
            </section>
          </div>

          <TestimonialCarousel
            testimonials={testimonials}
            accentColor="orange"
            title="Rezultati naših sportista"
          />

          <div className="mt-12 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Zašto trenirati snagu sa mnom:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-0.5 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <InteractiveFAQ
            faqs={faqs}
            title="Pitanja o treningu snage"
            accentColor="orange"
          />

          <RelatedTopics currentHref="/Snaga-i-Performanse" />
        </article>

        <TopicBottomCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
