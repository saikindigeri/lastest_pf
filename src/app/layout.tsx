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

export const metadata:Metadata  = {
 
  title: "Sai Kumar || Full Stack developer",
  description: "Portfolio of Sai Kumar",
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
