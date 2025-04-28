import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UNICORN SLAVE - Premium Vehicles",
  description:
    "Explore the versatile UNICORN SLAVE vehicle lineup featuring the Racing 78 Performance Edition and more.",
  metadataBase: new URL("https://v0-animated-carousell-gallery.vercel.app"),
  openGraph: {
    title: "UNICORN SLAVE - Racing 78 Performance Edition",
    description:
      "Experience the thrill of motorsport heritage with our limited-run RACING 78 edition. Engineered for performance, designed to turn heads.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "UNICORN SLAVE - Racing 78 Performance Edition",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNICORN SLAVE - Racing 78 Performance Edition",
    description: "Engineered for performance, designed to turn heads.",
    images: ["/twitter-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#333333]">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#333333" />
        <style>{`
          html, body {
            background-color: hsl(0, 0%, 20%) !important;
          }
        `}</style>
      </head>
      <body className={`${inter.className} bg-[#333333]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
