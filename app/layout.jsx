import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-barlowCondensed',
});

export const metadata = {
  title: "Akshat Shah",
  description: "Akshat Shah is a software engineer based in United States, specializing in building exceptional digital experiences. Currently, he's focused on developing responsive web applications and working with modern web technologies.",
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
