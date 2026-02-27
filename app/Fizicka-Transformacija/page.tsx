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
  Dumbbell,
  Check,
  Clock,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fizička Transformacija Tela Novi Sad | Smršaj i Izgradi Mišiće",
  description:
    "Želiš pravu fizičku transformaciju? Rekompozicija tela, gubitak masti, dobitak mišićne mase i zatezanje tela posle trudnoće. Personalni trener Novi Sad sa 100+ uspešnih transformacija. Besplatna konsultacija!",
  keywords: [
    "fizička transformacija",
    "transformacija tela Novi Sad",
    "rekompozicija tela",
    "gubitak masti",
    "dobitak mišićne mase",
    "definicija mišića",
    "zatezanje tela posle trudnoće",
    "personalni trener transformacija",
    "smršati Novi Sad",
    "oblikovanje tela",
    "fitnes transformacija",
    "body recomposition",
  ],
  alternates: {
    canonical:
      "https://lukadakicpersonalnitrenernovisad.com/Fizicka-Transformacija",
  },
  openGraph: {
    title:
      "Fizička Transformacija Tela | Luka Dakić - Personalni Trener Novi Sad",
    description:
      "100+ uspešnih transformacija. Rekompozicija tela, gubitak masti, dobitak mišićne mase. Zakaži besplatnu konsultaciju i započni svoju transformaciju!",
    url: "https://lukadakicpersonalnitrenernovisad.com/Fizicka-Transformacija",
    siteName: "Luka Dakić Fitness",
    images: [
      {
        url: "/DakicPozira.jpg",
        width: 1200,
        height: 630,
        alt: "Fizička transformacija sa personalnim trenerom Lukom Dakićem",
      },
    ],
    locale: "sr_RS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fizička Transformacija Tela | Personalni Trener Novi Sad",
    description:
      "Rekompozicija tela, gubitak masti, definicija mišića. 100+ uspešnih transformacija. Besplatna konsultacija!",
    images: ["/DakicPozira.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fizička Transformacija Tela",
  description:
    "Program fizičke transformacije koji uključuje rekompoziciju tela, gubitak masnog tkiva, dobitak mišićne mase i zatezanje tela. Individualni pristup sa personalnim trenerom.",
  provider: {
    "@type": "Person",
    name: "Luka Dakić",
    jobTitle: "Licencirani Personalni Trener",
    url: "https://lukadakicpersonalnitrenernovisad.com",
  },
  areaServed: {
    "@type": "City",
    name: "Novi Sad",
  },
  serviceType: "Personal Training - Body Transformation",
  offers: {
    "@type": "Offer",
    price: "20",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "100",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko traje fizička transformacija tela?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prve vidljive rezultate možete očekivati za 4-6 nedelja uz dosledan rad. Kompletna transformacija obično traje 3-6 meseci, u zavisnosti od početnog stanja i ciljeva. Svaki program je individualan i prilagođen vašem tempu.",
      },
    },
    {
      "@type": "Question",
      name: "Da li mogu istovremeno da smršam i izgradim mišiće?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, to se zove rekompozicija tela i jedan je od mojih specijaliteta. Kroz pravilan balans treninga snage, ishrane i oporavka, moguće je istovremeno gubiti masno tkivo i graditi mišićnu masu, posebno kod početnika i osoba sa viškom kilograma.",
      },
    },
    {
      "@type": "Question",
      name: "Kada mogu da počnem sa treningom posle porođaja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preporučujem da sačekate minimalno 6-8 nedelja posle porođaja i dobijete odobrenje od lekara. Program zatezanja tela posle trudnoće je posebno dizajniran sa bezbednim vežbama, postepenim povećanjem intenziteta i fokusom na jačanje centra tela.",
      },
    },
    {
      "@type": "Question",
      name: "Šta je uključeno u program transformacije?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Program uključuje: individualni plan treninga, plan ishrane prilagođen vašim ciljevima, redovno praćenje napretka sa merenjima, korekciju forme na svakom treningu, i stalnu podršku putem poruka. Besplatna konsultacija je prvi korak.",
      },
    },
    {
      "@type": "Question",
      name: "Koliko košta program fizičke transformacije?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cena individualnog treninga je od 20€. Postoje različiti paketi prilagođeni vašim potrebama i budžetu. Prvi trening i konsultacija su BESPLATNI - javite mi se da napravimo plan koji odgovara vašim ciljevima.",
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
      name: "Fizička Transformacija",
      item: "https://lukadakicpersonalnitrenernovisad.com/Fizicka-Transformacija",
    },
  ],
};

export default function FizickaTransformacijaPage() {
  const benefits = [
    "Individualni plan treninga prilagođen tvom telu i ciljevima",
    "Praćenje napretka sa merljivim rezultatima svake 2 nedelje",
    "Stručna korekcija forme na svakom treningu",
    "Kombinacija treninga i ishrane za maksimalne rezultate",
    "Podrška putem poruka između treninga",
    "Besplatna konsultacija za pravljenje plana",
  ];

  const stats = [
    { icon: Users, value: "100+", label: "Uspešnih transformacija" },
    { icon: Clock, value: "7+", label: "Godina iskustva" },
    { icon: TrendingUp, value: "4-6", label: "Nedelja do prvih rezultata" },
    { icon: Star, value: "5", label: "Prosečna ocena" },
  ];

  const faqs = [
    {
      q: "Koliko traje fizička transformacija tela?",
      a: "Prve vidljive rezultate možete očekivati za 4-6 nedelja uz dosledan rad. Kompletna transformacija obično traje 3-6 meseci, u zavisnosti od početnog stanja i ciljeva.",
    },
    {
      q: "Da li mogu istovremeno da smršam i izgradim mišiće?",
      a: "Da, to se zove rekompozicija tela. Kroz pravilan balans treninga snage i ishrane, moguće je istovremeno gubiti masno tkivo i graditi mišićnu masu.",
    },
    {
      q: "Kada mogu da počnem sa treningom posle porođaja?",
      a: "Preporučujem minimalno 6-8 nedelja posle porođaja i odobrenje lekara. Program je posebno dizajniran sa bezbednim vežbama i postepenim povećanjem intenziteta.",
    },
    {
      q: "Šta je uključeno u program transformacije?",
      a: "Program uključuje: individualni plan treninga, plan ishrane, redovno praćenje napretka, korekciju forme i stalnu podršku putem poruka.",
    },
    {
      q: "Koliko košta program fizičke transformacije?",
      a: "Cena individualnog treninga kreće od 20€. Prvi trening i konsultacija su BESPLATNI. Javite mi se da napravimo plan koji odgovara vašim ciljevima i budžetu.",
    },
  ];

  const testimonials = [
    {
      name: "Marija K.",
      result: "-12kg za 3 meseca",
      quote:
        "Posle trudnoće nisam verovala da ću ikad vratiti formu. Luka je napravio program koji se uklopio u moj raspored sa bebom. Rezultati su došli brže nego što sam očekivala!",
      duration: "Klijentkinja 4 meseca",
    },
    {
      name: "Stefan M.",
      result: "+8kg mišićne mase",
      quote:
        "Godinama sam se mučio da nabacim masu. Sa Lukinim programom i praćenjem ishrane, konačno vidim rezultate. Osećam se jače i samopouzdanije nego ikad.",
      duration: "Klijent 6 meseci",
    },
    {
      name: "Jelena D.",
      result: "-8kg, 2 broja manje",
      quote:
        "Probala sam sve dijete bez uspeha. Tek kad sam počela da treniram pravilno i jesti dovoljno, kilogrami su krenuli da se tope. Hvala Luka na strpljenju!",
      duration: "Klijentkinja 5 meseci",
    },
  ];

  const processSteps = [
    {
      icon: "MessageCircle",
      title: "Besplatna konsultacija",
      description:
        "Upoznajemo se, definišemo ciljeve i pravimo inicijalni plan",
      duration: "30 min",
    },
    {
      icon: "ClipboardCheck",
      title: "Početna merenja",
      description: "Beležimo mere, fotografije i testiramo trenutnu formu",
      duration: "1. nedelja",
    },
    {
      icon: "Calendar",
      title: "Personalizovani program",
      description: "Kreiranje plana treninga i ishrane prilagođenog tebi",
      duration: "1. nedelja",
    },
    {
      icon: "Trophy",
      title: "Praćenje i rezultati",
      description: "Redovni treninzi uz merenje napretka svake 2 nedelje",
      duration: "Kontinuirano",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
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

      {/* Sticky CTA - appears on scroll */}
      <StickyCTA
        accentColor="from-green-600 to-emerald-600"
        text="Zakaži konsultaciju"
      />

      <main className="pt-24 pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-50/80 via-white to-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1 text-sm text-gray-500">
                <li>
                  <Link
                    href="/"
                    className="hover:text-green-600 transition-colors"
                  >
                    Početna
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-gray-900 font-medium">
                  Fizička transformacija
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                Oblasti rada
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Fizička Transformacija Tela
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mt-2 pb-1">
                Smršaj, Izgradi Mišiće, Oblikuj Telo
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
              Bez obzira da li ciljaš na <strong>gubitak masnih naslaga</strong>
              , <strong>dobitak mišićne mase</strong> ili{" "}
              <strong>kompletnu rekompoziciju tela</strong> — imam proveren
              pristup sa <strong>100+ uspešnih transformacija</strong> u Novom
              Sadu.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-5 h-5 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="container mx-auto px-4 max-w-4xl py-12">
          {/* Quick Win CTA - High visibility */}
          <QuickWinCTA
            headline="Zakaži besplatnu konsultaciju i saznaj kako izgledaju rezultati na tvom telu"
            benefits={[
              "Analiza trenutnog stanja i ciljeva",
              "Personalizovani plan akcije",
              "Bez obaveza - 100% besplatno",
            ]}
            urgencyText="Slobodnih mesta: 3 ove nedelje"
            accentColor="green"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Rekompozicija Tela - Smršaj i Izgradi Mišiće Istovremeno
              </h2>
              <p>
                <strong>Rekompozicija tela</strong> znači istovremeni gubitak
                masnog tkiva i povećanje mišićne mase. Ovo je najčešći cilj
                klijenata koji dolaze kod mene — i jedan od najzahtevnijih.
              </p>
              <p>
                Kroz pažljivo doziran <strong>trening snage</strong>, pravilnu
                ishranu i redovno praćenje napretka, pravimo plan koji daje{" "}
                <strong>rezultate već u prvih 4-6 nedelja</strong>. Svaki
                program je individualan — jer tvoje telo nije isto kao nečije
                tuđe.
              </p>
              <p>
                Sa <strong>7+ godina iskustva</strong> i{" "}
                <strong>100+ uspešnih transformacija</strong>, znam šta
                funkcioniše i šta ne. Bez eksperimentisanja na tebi — koristim
                dokazane metode koje daju rezultate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Definicija i Oblikovanje Tela
              </h2>
              <p>
                Ako si već aktivan/na ali želiš da vidiš{" "}
                <strong>izraženije mišiće</strong> i manje masnih naslaga,
                definicija je sledeći korak. Radimo na targetiranom treningu
                koji naglašava ključne mišićne grupe, uz prilagođen kalorijski
                deficit koji čuva mišićnu masu.
              </p>
              <p>
                Program <strong>oblikovanja tela</strong> uključuje precizno
                podešavanje makronutrijenata, progresivno opterećenje i
                periodizaciju treninga za maksimalne rezultate.
              </p>
            </section>
          </div>

          {/* Process Timeline */}
          <ProcessTimeline
            steps={processSteps}
            accentColor="green"
            title="Kako izgleda tvoja transformacija?"
            subtitle="Od prvog kontakta do vidljivih rezultata — jednostavan proces u 4 koraka"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Zatezanje Tela Posle Trudnoće
              </h2>
              <p>
                Povratak u formu nakon porođaja zahteva specifičan pristup.
                Radim sa <strong>ženama koje žele da povrate snagu</strong>,
                zategnuto telo i samopouzdanje — uz potpuno prilagođen tempo i
                vežbe bezbedne za postporođajni period.
              </p>
              <p>
                Fokus je na <strong>jačanju centra tela</strong> (core),
                korekciji posture i postepenom povratku u punu aktivnost, bez
                žurbe i pritiska. Program uključuje vežbe za dijastazu
                (razdvajanje trbušnih mišića) i jačanje karličnog dna.
              </p>
              <p>
                Razumem izazove koje mame imaju — ograničeno vreme, nedostatak
                sna, nove odgovornosti. Zato je svaki trening efikasan i
                prilagođen tvom rasporedu.
              </p>
            </section>
          </div>

          {/* Testimonials Carousel */}
          <TestimonialCarousel
            testimonials={testimonials}
            accentColor="green"
            title="Priče uspešnih transformacija"
          />

          {/* Benefits Section */}
          <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Šta dobijaš kad radiš sa mnom:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-0.5 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive FAQ */}
          <InteractiveFAQ
            faqs={faqs}
            title="Često postavljana pitanja o transformaciji"
            accentColor="green"
          />

          {/* Related Topics */}
          <RelatedTopics currentHref="/Fizicka-Transformacija" />
        </article>

        <TopicBottomCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
