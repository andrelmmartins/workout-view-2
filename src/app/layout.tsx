import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { MFitProvider } from "@/contexts/MFitContext";

const fontFamily = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Workout View",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontFamily.className} antialiased`}>
        <MFitProvider>{children}</MFitProvider>
      </body>
    </html>
  );
}
