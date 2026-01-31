import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metarium - Enterprise Database Intelligence Platform",
  description: "Advanced SQL Server monitoring, metadata catalog, AI-assisted optimization, and comprehensive database intelligence for modern enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
