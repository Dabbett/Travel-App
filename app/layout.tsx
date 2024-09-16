import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UX/UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-100 parallax">
        <Navbar/>
        <main className="relative overflow-hidden parallax__layer--base">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

//should show
