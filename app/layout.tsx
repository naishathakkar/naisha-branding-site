import type { Metadata } from "next";
import type { ReactNode } from "react";
import { fontSans, fontDisplay } from "@/lib/fonts";
import { ThemeScript } from "@/components/theme-script";
import { Nav } from "@/components/layout/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Naisha Thakkar — Pharmacy Student & Healthcare Researcher",
    template: "%s — Naisha Thakkar",
  },
  description:
    "Simplifying healthcare research at the intersection of pharmacy, biotechnology, AI, and public health.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontDisplay.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <Nav />
        {children}
      </body>
    </html>
  );
}
