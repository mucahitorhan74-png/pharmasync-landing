import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollAnimations from "./components/ScrollAnimations";
import CookieBanner from "./components/CookieBanner";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PharmaSync - İlaç Firmaları İçin Depo Performans ve MF Yönetimi",
    template: "%s | PharmaSync"
  },
  description: "İlaç ve kozmetik firmaları için depo performans takibi ve MF yönetimi. Depo performansını analiz edin, karlılığı optimize edin. 14 gün ücretsiz deneyin.",
  keywords: ["ilaç firması", "mal fazlası", "MF yönetimi", "depo performans", "depo takibi", "pharmasync", "ilaç firma yazılımı", "karlılık analizi", "mutabakat"],
  authors: [{ name: "PharmaSync" }],
  creator: "PharmaSync",
  publisher: "PharmaSync",
  metadataBase: new URL("https://www.pharma-sync.com.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.pharma-sync.com.tr",
    title: "PharmaSync - İlaç Firmaları İçin Depo Performans ve MF Yönetimi",
    description: "İlaç ve kozmetik firmaları için depo performans takibi ve MF yönetimi. Depo performansını analiz edin, karlılığı optimize edin.",
    siteName: "PharmaSync",
  },
  twitter: {
    card: "summary_large_image",
    title: "PharmaSync - İlaç Firmaları İçin Depo Performans ve MF Yönetimi",
    description: "İlaç ve kozmetik firmaları için depo performans takibi ve MF yönetimi. Depo performansını analiz edin, karlılığı optimize edin.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ position: 'relative', minHeight: '100vh' }}>
        <GoogleAnalytics />
        <ParticlesBackground />
        <ScrollAnimations />
        <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}



