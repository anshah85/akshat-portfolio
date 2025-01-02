import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { icons } from "lucide-react";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-barlowCondensed',
});

export const metadata = {
  title: "Akshat Shah",
  description: "Akshat Shah is a software engineer based in United States, specializing in building exceptional digital experiences. Currently, he's focused on developing responsive web applications and working with modern web technologies.",
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: 'any',
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ], 
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={barlowCondensed.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
