import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Luka Đakić | Licencirani Fitness Trener",
    template: "%s | Luka Đakić Fitness",
  },
  description:
    "Luka Đakić je licencirani fitness trener posvećen transformaciji tela i uma. Kreiraj svoj personalizovani plan treninga i prehrane danas.",
  keywords: [
    "fitness trener",
    "personalni trener",
    "trening plan",
    "prehrana",
    "Luka Đakić",
    "transformacija",
    "zdravlje",
    "teretana",
  ],
  authors: [{ name: "Luka Đakić" }],
  creator: "Luka Đakić",
  publisher: "Luka Đakić Fitness",
  metadataBase: new URL("https://lukadakic.com"), // change to your actual domain

  openGraph: {
    title: "Luka Đakić | Licencirani Fitness Trener",
    description:
      "Transformiši svoje telo i um uz profesionalni pristup personalnog trenera Luke Đakića.",
    url: "https://lukadakic.com",
    siteName: "Luka Đakić Fitness",
    images: [
      {
        url: "/og-image.jpg", // add an image in your /public folder
        width: 1200,
        height: 630,
        alt: "Luka Đakić Fitness Trainer",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luka Đakić | Licencirani Fitness Trener",
    description:
      "Ostvari svoje ciljeve uz stručnu pomoć personalnog trenera Luke Đakića.",
    creator: "@lukadakic", // your Twitter handle if available
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
  category: "fitness",
  generator: "Next.js & v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
