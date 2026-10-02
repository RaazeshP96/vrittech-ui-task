import type { Metadata } from "next";
import { IBM_Plex_Mono, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const serif = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display-src",
  display: "swap",
});

const label = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-label-src",
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
    <html lang="en" className={`${serif.variable} ${label.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
