import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Could be extracted to a separate file
const ttNorms = localFont({
  src: [
    { path: "./fonts/TTNorms-Regular.woff", weight: "300" },
    { path: "./fonts/TTNorms-Medium.woff", weight: "400" },
    { path: "./fonts/TTNorms-Bold.woff", weight: "700" },
  ],
  variable: "--text-tt-norms",
});

// Could be extracted to a separate file
export const metadata: Metadata = {
  title: "MANUAL",
  description: "Manual.co landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ttNorms.className} text-green-base antialiased`}>
        {children}
      </body>
    </html>
  );
}
