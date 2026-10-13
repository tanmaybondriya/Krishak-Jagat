import type { Metadata, Viewport } from "next";
import { Mukta, Noto_Serif_Devanagari } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-serif-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "कृषक जगत (Krishak Jagat): कृषि, खेती और किसानों से जुड़े ताज़ा समाचार",
    template: "%s | कृषक जगत",
  },
  description: site.description,
  applicationName: "Krishak Jagat (कृषक जगत)",
  openGraph: {
    type: "website",
    locale: "hi_IN",
    siteName: "Krishak Jagat (कृषक जगत)",
    images: [{ url: "/wp-content/uploads/2020/07/krishak-jagat-e1597562142880.jpg", width: 400, height: 400 }],
  },
  twitter: { card: "summary_large_image", site: "@krishakjagat" },
  alternates: {
    types: { "application/rss+xml": `${site.url}/feed/` },
  },
};

export const viewport: Viewport = {
  themeColor: "#206b4d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hi" className={`${mukta.variable} ${notoSerifDevanagari.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="glass sr-only z-50 rounded-full border px-4 py-2 font-semibold text-leaf-800 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          मुख्य सामग्री पर जाएं
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
