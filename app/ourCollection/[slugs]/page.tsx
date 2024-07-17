import React from "react";
import Image from "next/image";
import vector from "@/public/assets/vector.svg";
import Selectors from "@/components/Selectors";
import { headers } from "next/headers";

const Collection = () => {
  return (
    <>
      <div className="bg-opacity-50 h-[100dvh] w-full">
        <section className="flex items-center justify-center mx-24 overflow-hidden relative -top-32 bg-p-1 p-8 text-center text-p-5 rounded-lg">
          <div className="max-w-[324px] md:max-w-[490px] relative">
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
                Introducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in
                small batches and shipped fresh weekly.
              </p>
            </div>
            <Selectors />
          </div>
        </section>
      </div>
    </>
  );
};

export default Collection;
