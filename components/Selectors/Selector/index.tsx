"use client";

import { useCollectionContext } from "@/context/CollectionContext";
import ISelectorProps from "@/interfaces/props/ISelectorProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Selector = (props: ISelectorProps) => {
  const { title, relatedTab } = props;
  const { selectedTab, setSelectedTab } = useCollectionContext();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectedTab === relatedTab) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedTab, relatedTab]);

  const handleSelect = () => {
    setSelectedTab(relatedTab);
  };

  return (
    <button
      onClick={handleSelect}
      className={`px-3 py-[5px] rounded-lg font-semibold ${
        selected ? "bg-p-3" : ""
      }`}
    >
      {title}
    </button>
  );
};

export default Selector;
