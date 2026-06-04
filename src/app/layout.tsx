import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider, ThemeScript } from "@/components/shared/theme-provider";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satish Prajapati | Frontend Architect & Swiss Designer",
  description:
    "High-performance neo-grotesque Swiss Style portfolio for Satish Prajapati, built with Next.js, Tailwind CSS, and GSAP.",
  openGraph: {
    title: "Satish Prajapati Portfolio",
    description:
      "Frontend Architect building high-performance web applications with precision design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-[var(--background)] text-[var(--foreground)] antialiased font-sans`}>
        <ThemeProvider>
          <div className="min-h-screen">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
