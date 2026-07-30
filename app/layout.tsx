import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "ROEWE Uzbekistan — Harakatning yangi darajasi",
    description: "ROEWE premium avtomobillari O‘zbekistonda. Modellar bilan tanishing va test-drayvga yoziling.",
    icons: { icon: "/images/roewe-logo.png" },
    openGraph: {
      title: "ROEWE Uzbekistan",
      description: "Harakatning yangi darajasi.",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "ROEWE Uzbekistan" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "ROEWE Uzbekistan",
      description: "Harakatning yangi darajasi.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
