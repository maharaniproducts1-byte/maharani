import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Maharani Agro Products | 100% Pure Kerala Coconut",
  description: "Approaching 50 years of excellence. Maharani desiccated coconut powder retains natural oils with zero added preservatives. Experience authentic Kerala coconut.",
  keywords: "Kerala coconut, desiccated coconut powder, authentic coconut, Maharani coconut, zero cholesterol, dairy free",
};

import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen bg-[#FFFDF9] text-slate-800 antialiased flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
