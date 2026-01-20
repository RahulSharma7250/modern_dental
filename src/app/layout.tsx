import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "DENTA | Premium Dental Clinic & Modern Care",
  description: "Modern Care for a Perfect Smile. Experience high-end dental services with advanced technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans selection:bg-primary selection:text-white">
        <ErrorReporter />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
