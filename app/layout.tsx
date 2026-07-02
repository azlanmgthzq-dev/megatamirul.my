import type { Metadata } from "next";
import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import NavShell from "@/components/navigation/NavShell";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Megat Amirul | Full-Stack Developer",
  description:
    "Full-stack developer specializing in aviation software systems and UI/UX design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Global Navigation */}
        <NavShell />

        {/* Page content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
