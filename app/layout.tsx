import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const Footer = dynamic(() => import("@/components/Footer"));
const EnquireModal = dynamic(() => import("@/components/EnquireModal"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Harshal IT Soft - Driving innovation through code",
  description: "Custom Software Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Bootstrap */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
          <Script
            src="https://kit.fontawesome.com/dffb3e54f1.js"
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />

        <link href="/css/healthcareStyle.css" rel="stylesheet" />
        <link href="/css/stellarnav.css" rel="stylesheet" />
      </head>

      <body>
         <Navbar />
        {children}
        <Footer />
        <EnquireModal />
      </body>
    </html>
  );
}
