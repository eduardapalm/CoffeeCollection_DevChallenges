import ICoffeeCard from "./ICoffeeCard";

interface ICollectionContext {
  collection: ICoffeeCard[];
  setCollection: (collection: ICoffeeCard[]) => void;
  selectedTab: string;
  setSelectedTab: (selectedTab: string) => void;
}

export default ICollectionContext;
