import type { Metadata } from "next";
import "../styles/globals.css";
import Image from "next/image";
import bgCafe from "../public/assets/bg-cafe.jpg";

export const metadata: Metadata = {
  title: "Coffee Collection",
  description: "Frontend challenge from devChallenges.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-p-2">
        <main className="flex align-top justify-start items-start">
          <Image
            src={bgCafe}
            alt="Background image of a coffee shop."
            layout="responsive"
            style={{ width: "100dvw", minHeight: "32dvh", objectFit: "fill" }}
          />
          {children}
        </main>
      </body>
    </html>
  );
}
