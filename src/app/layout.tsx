import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Geist_Mono, Tilt_Neon } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const tiltNeon = Tilt_Neon({
  variable: "--font-tilt-neon",
  subsets: ["latin"],
  weight: ["400"], // Essa fonte tem apenas peso 400
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kleber-A",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tiltNeon.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider>
        {children}
         </ThemeProvider>
      </body>
    </html>
  );
}
