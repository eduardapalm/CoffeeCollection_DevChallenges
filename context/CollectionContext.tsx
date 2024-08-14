"use client";

import ICoffeeCard from "@/interfaces/ICoffeeCard";
import ICollectionContext from "@/interfaces/ICollectionContext";
import { createContext, useContext, useState } from "react";

const CollectionContext = createContext<ICollectionContext>({
  collection: [],
  setCollection: () => {},
  selectedTab: "all",
  setSelectedTab: () => {},
});

export const CollectionProvider = ({ children }: any) => {
  const [collection, setCollection] = useState<ICoffeeCard[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("all");

  return (
    <CollectionContext.Provider
      value={{ collection, setCollection, selectedTab, setSelectedTab }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollectionContext = () => {
  return useContext(CollectionContext);
};
