import type { Metadata } from "next";
import { Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const serif = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display-src",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EPOCH",
  description: "A place to get your creativity together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={serif.variable}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
