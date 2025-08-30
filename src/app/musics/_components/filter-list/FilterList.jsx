"use client";

import { Button } from "@/components/ui/button";
import { filterMusics, removeElement } from "@/lib/functional/lib";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function FilterList({ songs, setSongs, filters, setFilters }) {
  useEffect(() => {
    const filtered = filterMusics(songs, filters);
    setSongs(filtered);
  }, [filters]);

  return (
    <ul className="mt-1 flex">
      {filters.map((filter, index) => (
        <li key={index}>
          <Button
            className="scale-75 hover:cursor-pointer"
            variant="ghost"
            onClick={() => {
              setFilters(removeElement(filters, filter));
            }}
          >
            <span>{filter.value}</span>
            <X />
          </Button>
        </li>
      ))}
    </ul>
  );
}
