import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pop horn",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icons/p.png" />
      </head>
      <body className={`${inter.className} bg-[black] h-full w-full`}>
        <main className="relative text-white">
          <Toaster />
          <nav className="absolute top-0 w-full md:top-1 lg:top-2  z-10">
            <Navbar />
          </nav>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}