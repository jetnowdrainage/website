import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DesktopNavbar } from "@/components/Navigation/DesktopNavbar/DesktopNavbar";
import { MobileNavbar } from "@/components/Navigation/MobileNavbar/MobileNavbar";
import { FloatingWhatsappButton } from "@/components/Contact/FloatingWhatsappButton";
import { SiteFooter } from "@/components/Footer/SiteFooter";
import { ComingSoonScreen } from "@/components/ComingSoon/ComingSoonScreen";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.jetnowdrainage.co.uk";
const ogImagePath = "/JetNow/JetNowLogo.jpg";
const comingSoonFlag = process.env.coming_soon ?? process.env.COMING_SOON ?? "";
const isComingSoon = comingSoonFlag.toLowerCase() === "true";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jetnowdrainage.co.uk"),
  title: {
    default: "Jet Now Drainage",
    template: "%s | Jet Now Drainage",
  },
  description: "Jet Now Drainage - fast, reliable drainage services across the UK.",
  alternates: {
    canonical: "/",
  },
  robots: isComingSoon
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
      },
  openGraph: {
    title: "Jet Now Drainage",
    description: "Jet Now Drainage - fast, reliable drainage services across the UK.",
    url: siteUrl,
    siteName: "Jet Now Drainage",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: ogImagePath,
        width: 1024,
        height: 1024,
        alt: "Jet Now Drainage logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jet Now Drainage",
    description: "Jet Now Drainage - fast, reliable drainage services across the UK.",
    images: [ogImagePath],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Jet Now Drainage",
    url: siteUrl,
    image: `${siteUrl}${ogImagePath}`,
    telephone: "+447804450233",
    email: "info@jetnowdrainage.co.uk",
    areaServed: [
      "London",
      "Essex",
      "Hertfordshire",
      "Surrey",
      "Kent",
      "Cambridgeshire",
      "Bedfordshire",
      "Buckinghamshire",
      "Suffolk",
    ],
    sameAs: [
      "https://www.facebook.com/jetnowdrainage",
      "https://www.instagram.com/jetnow_drainage/",
      "https://www.tiktok.com/@jetnowdrainage",
      "https://www.youtube.com/@jetnowdrainage",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {isComingSoon ? (
            <ComingSoonScreen />
          ) : (
            <>
              <MobileNavbar />
              <DesktopNavbar />
              <main className="flex-1">{children}</main>
              <FloatingWhatsappButton />
              <SiteFooter />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
