import type { Metadata } from "next";
import "../styles/globals.css";
import Image from "next/image";
import bgCafe from "../public/assets/bg-cafe.jpg";
import vector from "@/public/assets/vector.svg";
import Selectors from "@/components/Selectors";
import { CollectionProvider } from "../context/CollectionContext";

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
      <body className="bg-p-2 font-dmSans">
        <main className="flex align-top justify-start items-start">
          <Image
            src={bgCafe}
            alt="Background image of a coffee shop."
            layout="responsive"
            style={{ width: "100dvw", minHeight: "32dvh", objectFit: "fill" }}
          />

          <div className="bg-opacity-50 h-[100dvh] w-full">
            <section className="flex items-center justify-center mx-24 overflow-hidden relative -top-32 bg-p-1 p-8 text-center text-p-5 rounded-xl">
              <div className="max-w-[324px] md:max-w-[520px] md:px-1 relative">
                <div className="absolute top-5 -right-24 md:right-0">
                  <Image
                    src={vector}
                    alt="Vector with a spring shape"
                    width={250}
                    height={30}
                  />
                </div>
                <div className="relative z-10 pt-16">
                  <h1 className="font-dmSans font-semibold text-4xl">
                    Our Collection
                  </h1>
                  <p className="font-dmSans text-p-3 font-semibold my-3">
                    Introducing our Coffee Collection, a selection of unique
                    coffees from different roast types and origins, expertly
                    roasted in small batches and shipped fresh weekly.
                  </p>
                </div>
                <CollectionProvider>
                  <Selectors />
                  {children}
                </CollectionProvider>
              </div>
            </section>
          </div>
        </main>
      </body>
    </html>
  );
}
