import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Luka Dakić | Licencirani Fitness Trener",
    template: "%s | Luka Dakić Fitness",
  },
  description:
    "Transformiši svoje telo i um uz licenciranog personalnog trenera Luku Dakića iz Novog Sada. Individualni treninzi, plan ishrane i profesionalna podrška.",
  keywords: [
    "fitness trener",
    "personalni trener Novi Sad",
    "trening plan",
    "ishrana",
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
      "Luka Dakić – licencirani fitness trener iz Novog Sada. Stručni treninzi, planovi ishrane i podrška za tvoju transformaciju.",
    url: "https://lukadakicpersonalnitrenernovisad.com",
    siteName: "Luka Dakić Fitness",
    images: [
      {
        url: "/DakicPozira.jpg", // ✅ or replace with your logo/photo
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

        {/* ✅ Structured data: tells Google your logo and brand */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Luka Dakić Fitness",
              url: "https://lukadakicpersonalnitrenernovisad.com",
              logo: "https://lukadakicpersonalnitrenernovisad.com/favicon.ico", // or your /DakicPozira.jpg
              sameAs: [
                "https://www.instagram.com/luka__dakic",
                // add Facebook, TikTok, etc if you want
              ],
            }),
          }}
        />
      </head>
      <body>
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
