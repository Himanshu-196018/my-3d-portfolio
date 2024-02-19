import "@/app/ui/globals.css";
import type { Metadata } from "next";
import { work_sans } from "@/app/ui/fonts";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Next JS Portfolio for Himanshu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${work_sans.className}`}>
        <main className="bg-slate-300/20">
          <Navbar />
          {children}
      </main>
    </body>
    </html>
  );
}
