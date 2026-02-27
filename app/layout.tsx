import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Luka Dakić | Licencirani Personalni Trener Novi Sad",
    template: "%s | Luka Dakić Fitness",
  },
  description:
    "Personalni trener Novi Sad - Luka Dakić. Individualni treninzi, planovi ishrane i transformacija tela. 7+ godina iskustva, 100+ zadovoljnih klijenata. Zakažite besplatan trening!",
  keywords: [
    "personalni trener Novi Sad",
    "fitness trener Novi Sad",
    "personalni trening",
    "trening plan",
    "plan ishrane",
    "Luka Dakić",
    "transformacija tela",
    "mršavljenje",
    "povećanje mišićne mase",
    "teretana Novi Sad",
    "fitnes instruktor",
  ],
  alternates: {
    canonical: "https://lukadakicpersonalnitrenernovisad.com",
    languages: {
      "sr-RS": "https://lukadakicpersonalnitrenernovisad.com",
    },
  },
  authors: [{ name: "Luka Dakić" }],
  creator: "Luka Dakić",
  publisher: "Luka Dakić Fitness",
  metadataBase: new URL("https://lukadakicpersonalnitrenernovisad.com"),

  openGraph: {
    title: "Luka Dakić | Personalni Trener Novi Sad",
    description:
      "Personalni trener Novi Sad - Luka Dakić. Individualni treninzi, planovi ishrane, transformacija tela. 7+ godina iskustva. Zakažite besplatan trening!",
    url: "https://lukadakicpersonalnitrenernovisad.com",
    siteName: "Luka Dakić Fitness",
    images: [
      {
        url: "/DakicPozira.jpg",
        width: 1200,
        height: 630,
        alt: "Luka Dakić – personalni trener Novi Sad",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luka Dakić | Licencirani Fitness Trener",
    description:
      "Ostvari svoje ciljeve uz stručnu pomoć personalnog trenera Luke Dakića.",
    creator: "@lukadakic",
    images: ["/DakicPozira.jpg"], // ✅ same image for Twitter
  },

  icons: {
    icon: "/favicon.ico", // ✅ your existing favicon
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
  category: "fitness",
  generator: "Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        {/* Google Site Verification for Google Ads */}
        <meta name="google-site-verification" content="xICajmrjd8aFaBZORC67ZTqPH9gLUdkSbFkmYve_KuM" />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '271683660325059');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=271683660325059&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Luka Dakić Fitness",
              url: "https://lukadakicpersonalnitrenernovisad.com",
              logo: "https://lukadakicpersonalnitrenernovisad.com/DakicLogoPun.png",
              sameAs: [
                "https://www.instagram.com/luka__dakic",
              ],
            }),
          }}
        />

        {/* LocalBusiness Schema - Personal Trainer */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://lukadakicpersonalnitrenernovisad.com/#localbusiness",
              name: "Luka Dakić - Personalni Trener",
              description: "Licencirani personalni trener sa 7+ godina iskustva. Individualni treninzi, planovi ishrane i transformacija tela u Novom Sadu.",
              url: "https://lukadakicpersonalnitrenernovisad.com",
              telephone: "+381662444454",
              email: "luka_dakic@yahoo.com",
              image: "https://lukadakicpersonalnitrenernovisad.com/DakicPozira.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Novi Sad",
                postalCode: "21000",
                addressCountry: "RS",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.2671,
                longitude: 19.8335,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "18:00",
                },
              ],
              priceRange: "€15-€50",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "100",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [
                "https://www.instagram.com/luka__dakic",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Fitnes usluge",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Personalni Trening",
                      description: "Individualni treninzi prilagođeni vašim ciljevima",
                    },
                    price: "20",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Polupersonalni Trening",
                      description: "Trening u malim grupama do 4 osobe",
                    },
                    price: "15",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Nutricionističko Savetovanje",
                      description: "Dvomesečni plan ishrane prilagođen vašim ciljevima",
                    },
                    price: "50",
                    priceCurrency: "EUR",
                  },
                ],
              },
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  name: "O meni",
                  item: "https://lukadakicpersonalnitrenernovisad.com/#about",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Usluge",
                  item: "https://lukadakicpersonalnitrenernovisad.com/#services",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Iskustva",
                  item: "https://lukadakicpersonalnitrenernovisad.com/#testimonials",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Kontakt",
                  item: "https://lukadakicpersonalnitrenernovisad.com/#contact",
                },
              ],
            }),
          }}
        />

        {/* Person Schema for Luka Dakić */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Luka Dakić",
              jobTitle: "Licencirani Personalni Trener",
              description: "Master Fakulteta sporta i fizičkog vaspitanja, NASM sertifikovani personalni trener sa 7+ godina iskustva",
              image: "https://lukadakicpersonalnitrenernovisad.com/DakicPozira.jpg",
              url: "https://lukadakicpersonalnitrenernovisad.com",
              sameAs: [
                "https://www.instagram.com/luka__dakic",
              ],
              workLocation: {
                "@type": "Place",
                name: "Novi Sad",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Novi Sad",
                  addressCountry: "RS",
                },
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "Master Fakulteta sporta i fizičkog vaspitanja",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "certificate",
                  name: "NASM Certified Personal Trainer",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "certificate",
                  name: "NASM Corrective Exercise Specialist",
                },
              ],
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Koliko košta prvi trening?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Prvi trening je BESPLATAN! Želim da se upoznamo i da vidimo da li možemo zajedno raditi ka vašim ciljevima. Na prvom treningu ćemo razgovarati o vašim ciljevima, proveriti trenutnu formu i napraviti plan akcije.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Koliko treninga nedeljno je potrebno za rezultate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Za optimalne rezultate preporučujem 3-4 treninga nedeljno. Međutim, plan prilagođavam vašem rasporedu i ciljevima. Čak i 2 treninga nedeljno mogu doneti značajne rezultate uz pravilan pristup i disciplinu.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Da li radite sa početnicima?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Apsolutno! Radim sa klijentima svih nivoa - od potpunih početnika do iskusnih vežbača. Svaki program prilagođavam individualnim potrebama i mogućnostima. Početnici su dobrodošli!",
                  },
                },
                {
                  "@type": "Question",
                  name: "Šta je uključeno u plan ishrane?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dvomesečni plan ishrane uključuje: personalizovani jelovnik prilagođen vašim ciljevima, listu namirnica za kupovinu, praćenje makronutrijenata, savete o suplementaciji i kontinuiranu podršku putem poruka.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Gde se održavaju treninzi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Treninzi se održavaju u teretanama u Novom Sadu. Lokaciju dogovaramo u skladu sa vašim potrebama i mogućnostima. Takođe je moguće organizovati treninge na otvorenom kada to vremenski uslovi dozvoljavaju.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Kako mogu da zakažem trening?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Možete me kontaktirati putem WhatsApp-a, Viber-a ili Instagram-a. Broj telefona je +381 66 244 454. Odgovaram na poruke u najkraćem roku.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* ✅ Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HR77784YX1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HR77784YX1');
            `,
          }}
        />
      </body>
    </html>
  );
}
