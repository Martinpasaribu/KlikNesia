import "../styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/store/provider";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Click Usaha",
  description:
    "Click Usaha adalah solusi digital lengkap untuk UMKM dan bisnis Indonesia. Kami menyediakan layanan pengembangan website, aplikasi mobile, branding, dan desain kreatif untuk mendukung pertumbuhan bisnis Anda.",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "32x32",
      url: "https://clickusaha.com/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "https://clickusaha.com/apple-icon.png",
    },
  ],
  keywords:
    "Click Usaha, Jasa pengembangan website UMKM, Aplikasi mobile bisnis, Branding digital Indonesia, Desain kreatif untuk usaha",
  openGraph: {
    title: "ClickUsaha",
    description:
      "Click Usaha adalah solusi digital lengkap untuk UMKM dan bisnis Indonesia. Temukan layanan kami mulai dari pembuatan website hingga branding bisnis.",
    url: "https://www.clickusaha.com",
    siteName: "ClickUsaha",
    images: [
      {
        url: "https://clickusaha.com/og-image.png", // ganti dengan OG image asli kamu
        width: 1200,
        height: 630,
        alt: "ClickUsaha - Solusi Digital UMKM",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickUsaha",
    description:
      "Click Usaha menyediakan layanan digital modern untuk usaha Anda. Website, aplikasi mobile, branding, dan lainnya.",
    images: ["https://clickusaha.com/og-image2.png"], // ganti jika sudah punya gambar
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      {/* 👆 suppressHydrationWarning membantu Next menghindari warning */}
      <body className={`${geistSans.variable} ${geistMono.variable} w-full`}>

        {/* Google tag (gtag.js) */}
        <Script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=G-78LPKBXL1J"
        />
        <Script id="google-analytics">
          { ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-78LPKBXL1J');
          `}
        </Script>
        <Toaster position="bottom-right" />
        <Providers>
          <ThemeProvider>
            <Layout>
              {children}
            </Layout>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
