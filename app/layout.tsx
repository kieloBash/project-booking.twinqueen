import AuthProvider from "@/providers/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/global/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Twin Queen Agency",
  description: "Travel Agency by TwinQueen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${poppins.className} flex flex-col relative w-full`}>
          <Navbar />
          <main className="w-full min-h-screen mt-20 flex flex-col">
            {children}
          </main>
        </body>
      </html>
    </AuthProvider>
  );
}
