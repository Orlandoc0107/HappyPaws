import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/context/SessionAuthProvider"
import { roboto } from "@/fonts/font";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happy Paws",
  description: "Happy Paws",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en" className="bg-color7 z-0">
        <body className={roboto.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
