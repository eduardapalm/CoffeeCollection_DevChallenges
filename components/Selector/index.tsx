"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Selector = ({ title }: { title: string }) => {
  const currentPage = usePathname().split("/").pop();
  const [selected, setSelected] = useState(false);
  const [linkTo, setLinkTo] = useState(currentPage);

  useEffect(() => {
    const pages = ["all", "available"];
    if (currentPage) {
      if (title?.toLocaleLowerCase().includes(currentPage)) {
        setSelected(true);
      } else {
        const link = pages.find((page) =>
          title?.toLocaleLowerCase().includes(page)
        );
        setLinkTo(link);
      }
    }
  }, [currentPage, title]);

  return (
    <Link
      className={`${selected ? "bg-slate-50" : ""}`}
      href={`/ourCollection/${linkTo}`}
    >
      {title}
    </Link>
  );
};

export default Selector;
