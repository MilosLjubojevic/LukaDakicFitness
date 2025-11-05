import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Luka Dakić | Licencirani Fitness Trener",
    template: "%s | Luka Dakić Fitness",
  },
  description:
    "Luka Dakić je licencirani fitness trener posvećen transformaciji tela i uma. Kreiraj svoj personalizovani plan treninga i prehrane danas.",
  keywords: [
    "fitness trener",
    "personalni trener",
    "trening plan",
    "prehrana",
    "Luka Dakić",
    "transformacija",
    "zdravlje",
    "teretana",
  ],
  authors: [{ name: "Luka Dakić" }],
  creator: "Luka Dakić",
  publisher: "Luka Dakić Fitness",
  metadataBase: new URL("https://lukadakicpersonalnitrenernovisad.com"),

  openGraph: {
    title: "Luka Dakić | Licencirani Fitness Trener",
    description:
      "Transformiši svoje telo i um uz profesionalni pristup personalnog trenera Luke Dakića.",
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
    images: ["/DakicPozira.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/DakicPozira.jpg",
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
      <head />
      <body>
        {children}

        {/* ✅ Google Analytics (correct Next.js way) */}
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
