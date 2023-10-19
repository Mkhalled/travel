import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Lillinker",
  description: "La Voie Rapide vers la Société de Portage Parfaite.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
