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
  Apple,
  Check,
  Scale,
  Utensils,
  Pill,
  BookOpen,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Ishrane Novi Sad | Nutricionizam i Savetovanje za Suplemente",
  description:
    "Personalizovani planovi ishrane za mršavljenje, dobitak mišićne mase i zdravlje. Keto dijeta, makronutrijenti, savetovanje za suplemente. Bez gladovanja i strogih zabrana.",
  keywords: [
    "plan ishrane Novi Sad",
    "nutricionizam Novi Sad",
    "dijeta za mršavljenje",
    "dobitak mišićne mase ishrana",
    "keto dijeta plan",
    "makronutrijenti",
    "suplementi savet",
    "protein whey",
    "kreatin",
    "zdrava ishrana plan",
    "kalorijski deficit",
    "meal prep",
  ],
  alternates: {
    canonical: "https://lukadakicpersonalnitrenernovisad.com/Dijeta-i-Suplementi",
  },
  openGraph: {
    title: "Plan Ishrane i Nutricionizam | Luka Dakić - Personalni Trener",
    description:
      "Personalizovani planovi ishrane bez gladovanja. Keto, klasična dijeta, dobitak mase. Stručno savetovanje za suplemente. 50€ za dvomesečni plan.",
    url: "https://lukadakicpersonalnitrenernovisad.com/Dijeta-i-Suplementi",
    siteName: "Luka Dakić Fitness",
    images: [
      {
        url: "/DakicPozira.jpg",
        width: 1200,
        height: 630,
        alt: "Plan ishrane sa personalnim trenerom",
      },
    ],
    locale: "sr_RS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan Ishrane Novi Sad | Dijeta i Suplementi",
    description:
      "Personalizovana ishrana za tvoje ciljeve. Keto, mršavljenje, masa. Bez gladovanja, sa rezultatima.",
    images: ["/DakicPozira.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Plan Ishrane i Nutricionističko Savetovanje",
  description:
    "Personalizovani dvomesečni planovi ishrane prilagođeni ciljevima klijenta - mršavljenje, dobitak mišićne mase, zdravlje. Uključuje praćenje makronutrijenata, listu namirnica i savetovanje za suplemente.",
  provider: {
    "@type": "Person",
    name: "Luka Dakić",
    url: "https://lukadakicpersonalnitrenernovisad.com",
  },
  areaServed: {
    "@type": "City",
    name: "Novi Sad",
  },
  serviceType: "Nutrition Planning and Supplement Consulting",
  offers: {
    "@type": "Offer",
    name: "Dvomesečni plan ishrane",
    price: "50",
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
      name: "Da li moram brojati kalorije da bih smršao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne obavezno. Za neke ljude je brojanje kalorija korisno, za druge stresno i neodrživo. Postoje i drugi pristupi - intuitivno jedenje, kontrola porcija, fokus na kvalitet hrane. Zajedno biramo metod koji ti najviše odgovara.",
      },
    },
    {
      "@type": "Question",
      name: "Da li je keto dijeta efikasna za mršavljenje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keto može biti efikasna za brzi gubitak masti, ali nije za svakoga. Zahteva striktno izbegavanje ugljenih hidrata što može biti teško održivo. Procenjujemo zajedno da li je pravi izbor za tvoj stil života.",
      },
    },
    {
      "@type": "Question",
      name: "Koji suplementi su zaista neophodni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Za većinu ljudi: protein u prahu (ako ne unosiš dovoljno iz hrane), kreatin, vitamin D i omega-3. Sve ostalo je uglavnom marketing. Konkretne preporuke zavise od tvoje ishrane i ciljeva.",
      },
    },
    {
      "@type": "Question",
      name: "Koliko košta plan ishrane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dvomesečni plan ishrane košta 50€ i uključuje: personalizovani jelovnik, listu namirnica, praćenje makronutrijenata, savete za suplemente i kontinuiranu podršku putem poruka tokom ta dva meseca.",
      },
    },
    {
      "@type": "Question",
      name: "Da li mogu da jedem hranu koju volim i da smršam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da! Princip je 80/20 - 80% ishrane čini kvalitetna, nutritivno bogata hrana, a 20% može biti fleksibilno. Stroge zabrane vode u yo-yo efekat. Cilj je napraviti plan koji možeš pratiti dugoročno.",
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
      name: "Dijeta i Suplementi",
      item: "https://lukadakicpersonalnitrenernovisad.com/Dijeta-i-Suplementi",
    },
  ],
};

export default function DijetaISuplementiPage() {
  const benefits = [
    "Personalizovan jelovnik baziran na tvojim preferencijama",
    "Lista namirnica za kupovinu sa alternativama",
    "Praćenje makronutrijenata (proteini, masti, ugljeni hidrati)",
    "Recepti za jednostavne i ukusne obroke",
    "Savetovanje za suplemente bez nepotrebnog trošenja",
    "Dvomesečna podrška putem poruka za sva pitanja",
  ];

  const stats = [
    { icon: Scale, value: "50€", label: "Dvomesečni plan" },
    { icon: Utensils, value: "80/20", label: "Fleksibilan pristup" },
    { icon: Pill, value: "4", label: "Ključna suplementa" },
    { icon: BookOpen, value: "30+", label: "Recepata uključeno" },
  ];

  const faqs = [
    {
      q: "Da li moram brojati kalorije da bih smršao?",
      a: "Ne obavezno. Za neke je brojanje korisno, za druge stresno. Postoje i drugi pristupi - kontrola porcija, fokus na kvalitet hrane. Biramo metod koji ti odgovara.",
    },
    {
      q: "Da li je keto dijeta efikasna za mršavljenje?",
      a: "Može biti, ali nije za svakoga. Zahteva striktno izbegavanje ugljenih hidrata. Zajedno procenjujemo da li je pravi izbor za tvoj stil života.",
    },
    {
      q: "Koji suplementi su zaista neophodni?",
      a: "Za većinu: protein, kreatin, vitamin D i omega-3. Sve ostalo je uglavnom marketing. Konkretne preporuke zavise od tvoje ishrane i ciljeva.",
    },
    {
      q: "Koliko košta plan ishrane?",
      a: "Dvomesečni plan košta 50€ i uključuje jelovnik, liste namirnica, praćenje makrosa, savete za suplemente i dvomesečnu podršku.",
    },
    {
      q: "Da li mogu da jedem hranu koju volim i da smršam?",
      a: "Da! Princip je 80/20 - većina ishrane je kvalitetna hrana, 20% je fleksibilno. Stroge zabrane vode u yo-yo efekat.",
    },
  ];

  const testimonials = [
    {
      name: "Milica R.",
      result: "-7kg bez gladovanja",
      quote: "Prvi put u životu mršavim a da nisam stalno gladna. Luka mi je napravio plan koji uključuje hranu koju volim. Čak i slatkiše! Rezultati govore sami za sebe.",
      duration: "Klijentkinja 3 meseca",
    },
    {
      name: "Boris N.",
      result: "+5kg čiste mase",
      quote: "Mislio sam da znam da jedem za masu, ali Luka mi je pokazao koliko proteina zapravo treba. Sada napredak ne staje i osećam se sjajno.",
      duration: "Klijent 4 meseca",
    },
    {
      name: "Tamara J.",
      result: "Stabilna energija ceo dan",
      quote: "Imala sam problem sa energijom - uvek umorna. Promena ishrane je napravila ogromnu razliku. Sad nemam padove energije i koncentracija je mnogo bolja.",
      duration: "Klijentkinja 2 meseca",
    },
  ];

  const processSteps = [
    {
      icon: "MessageCircle",
      title: "Konsultacija o ciljevima",
      description: "Razgovaramo o tvojim ciljevima, preferencijama i ograničenjima",
      duration: "30 min",
    },
    {
      icon: "ClipboardCheck",
      title: "Analiza trenutne ishrane",
      description: "Pregled šta trenutno jedeš i gde su mogućnosti za poboljšanje",
      duration: "1. nedelja",
    },
    {
      icon: "FileText",
      title: "Personalizovani plan",
      description: "Dobijanje kompletnog plana ishrane sa receptima i listama",
      duration: "1. nedelja",
    },
    {
      icon: "Trophy",
      title: "Praćenje i prilagođavanje",
      description: "Kontinuirana podrška i korekcija plana prema rezultatima",
      duration: "2 meseca",
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
        accentColor="from-blue-500 to-cyan-500"
        text="Naruči plan"
      />

      <main className="pt-24 pb-0">
        <section className="bg-gradient-to-b from-blue-50/80 via-white to-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-blue-600 transition-colors">
                    Početna
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-gray-900 font-medium">Dijeta i suplementi</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Apple className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Nutricionizam
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Plan Ishrane i Suplementi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-2 pb-1">
                Hrana Koja Podržava Tvoje Ciljeve
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
              Trening bez pravilne ishrane je kao auto bez goriva. Pravim{" "}
              <strong>personalizovane planove ishrane</strong> koji se uklapaju u tvoj život
              — bez gladovanja, strogih zabrana i yo-yo efekta.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 max-w-4xl py-12">
          <QuickWinCTA
            headline="Dobij plan ishrane koji zaista funkcioniše — bez gladovanja i zabrana"
            benefits={[
              "Personalizovani jelovnik sa receptima",
              "Lista namirnica za kupovinu",
              "Dvomesečna podrška putem poruka",
            ]}
            urgencyText="Samo 50€ za kompletan 2-mesečni plan"
            accentColor="blue"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Personalizovani Plan Ishrane
              </h2>
              <p>
                Svaki plan ishrane pravim <strong>potpuno od nule</strong>, na osnovu tvog
                cilja, prehrambenih navika, alergija, rasporeda i preferencija. Nema
                kopiranih šablona sa interneta — dobijaš jelovnik napravljen za tebe.
              </p>
              <p>
                Plan uključuje <strong>konkretne obroke sa gramažama</strong>, listu
                namirnica za kupovinu, i alternativne opcije za svaki obrok. Ako ne voliš
                brokoli — nema brokoli. Ako ne možeš bez hleba — biće hleba.
              </p>
              <p>
                Fokus je na <strong>održivosti</strong>: plan koji možeš pratiti 6 meseci, ne
                samo 6 dana. Zato radimo zajedno na pravljenju navika.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Ishrana za Mršavljenje - Kalorijski Deficit Bez Muke
              </h2>
              <p>
                <strong>Mršavljenje</strong> se svodi na jednu stvar: kalorijski deficit.
                Ali kako ga postići bez konstantnog osećaja gladi? Tu dolazi do izražaja
                kvalitet hrane i pametno raspoređivanje obroka.
              </p>
              <p>
                Fokusiramo se na <strong>proteinski bogatu hranu</strong> koja te drži sitim,{" "}
                <strong>povrće koje daje volumen</strong> bez mnogo kalorija, i{" "}
                <strong>složene ugljene hidrate</strong> koji stabilizuju šećer u krvi.
              </p>
            </section>
          </div>

          <ProcessTimeline
            steps={processSteps}
            accentColor="blue"
            title="Kako dobijam plan ishrane?"
            subtitle="Jednostavan proces od konsultacije do rezultata"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Ishrana za Dobitak Mišićne Mase
              </h2>
              <p>
                Za <strong>rast mišića</strong> potreban je kalorijski suficit — ali ne bilo
                kakav. Cilj je uneti dovoljno proteina i kalorija za rast, a da pri tom ne
                nakupiš previše masnog tkiva.
              </p>
              <p>
                Plan uključuje <strong>praćenje proteina po obroku</strong> (minimum 30-40g
                po obroku za optimalnu sintezu), strategiju za timing ugljenih hidrata oko
                treninga, i dovoljno masti za hormonalni balans.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Suplementi - Šta Zaista Radi
              </h2>
              <p>
                Industrija suplemenata vredi milijarde, a 90% proizvoda su bacanje novca.
                Dajem ti <strong>iskren pregled</strong> šta ima dokazanu efikasnost:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Protein (whey/kazein)</strong> — koristan ako ne unosiš dovoljno iz hrane</li>
                <li><strong>Kreatin monohidrat</strong> — dokazano povećava snagu</li>
                <li><strong>Vitamin D</strong> — većina ljudi ima deficit</li>
                <li><strong>Omega-3</strong> — ako ne jedeš masnu ribu 2-3x nedeljno</li>
              </ul>
            </section>
          </div>

          <TestimonialCarousel
            testimonials={testimonials}
            accentColor="blue"
            title="Rezultati naših klijenata"
          />

          <div className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Šta uključuje plan ishrane od 50€:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-0.5 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <InteractiveFAQ
            faqs={faqs}
            title="Pitanja o ishrani i suplementima"
            accentColor="blue"
          />

          <RelatedTopics currentHref="/Dijeta-i-Suplementi" />
        </article>

        <TopicBottomCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
