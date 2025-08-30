import { Button } from "@/components/ui/button";
import { removeElement } from "@/lib/functional/lib";
import { X } from "lucide-react";

export default function FilterList({ filters, setFilters }) {
  return (
    <ul className="mb-2 flex">
      {filters.map((filter, index) => (
        <li key={index}>
          <Button
            className="scale-75 hover:cursor-pointer"
            variant="ghost"
            onClick={() => setFilters(removeElement(filters, filter))}
          >
            <span>{filter.value}</span>
            <X />
          </Button>
        </li>
      ))}
    </ul>
  );
}
