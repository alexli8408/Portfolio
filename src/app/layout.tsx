import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Li",
  description:
    "Computer Engineering student at the University of Waterloo. Building software at the intersection of systems and web.",
  metadataBase: new URL("https://axli.me"),
  openGraph: {
    title: "Alex Li",
    description: "Computer Engineering @ UWaterloo",
    url: "https://axli.me",
    siteName: "Alex Li",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Li",
    description: "Computer Engineering @ UWaterloo",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistSans.variable} ${caveat.variable} antialiased`}
      >
        <ThemeProvider>
          <main className="flex justify-center min-h-screen bg-stone-100 dark:bg-black selection:bg-yellow-200 dark:selection:bg-yellow-800 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="flex flex-col gap-4 w-full md:max-w-[500px] m-6 md:m-20 md:mt-[60px] text-neutral-500 dark:text-neutral-400 font-extralight">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
