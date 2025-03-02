import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "./context/ThemeContext";
import Navbar from "../components/Navbar";
import "./globals.css";

import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sai Kumar Kindigeri | Full Stack Developer",
  description: "Portfolio of Sai Kumar Kindigeri",
  keywords: "Full Stack Developer, Web3, MERN, Blockchain, Portfolio",
  authors: [{ name: "Sai Kumar Kindigeri", url: "https://sai-seven-sooty.vercel.app" }],
  openGraph: {
    title: "Sai Kumar Kindigeri | Portfolio",
    description: "Portfolio of Sai Kumar Kindigeri - Full Stack & Web3 Developer.",
    url: "https://sai-seven-sooty.vercel.app",
    siteName: "Sai Kumar Kindigeri",
    images: [
      {
        url: "iron.png", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Sai Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Kumar Kindigeri | Portfolio",
    description: "Portfolio of Sai Kumar Kindigeri - Full Stack & Web3 Developer.",
    images: ["https://yourwebsite.com/og-image.png"], // Replace with your actual image
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider>
          <Navbar />
          <Toaster position="bottom-right" reverseOrder={false} />
          <main className="mt-20 p-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
