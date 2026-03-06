import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { siteData } from "@/lib/data"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: `${siteData.name} — Hydraulika Siłowa`,
  description: `Sprzedaż, testy i naprawa sprzętu hydraulicznego. ${siteData.region}. Skontaktuj się: ${siteData.phone}`,
  keywords: [
    "hydraulika siłowa",
    "sprzedaż sprzętu hydraulicznego",
    "naprawa hydrauliki",
    "serwis hydrauliczny",
    "południowa Polska",
    "pompy hydrauliczne",
    "siłowniki hydrauliczne",
  ],
  openGraph: {
    title: `${siteData.name} — Hydraulika Siłowa`,
    description: `Sprzedaż, testy i naprawa sprzętu hydraulicznego. ${siteData.region}.`,
    type: "website",
    locale: "pl_PL",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}