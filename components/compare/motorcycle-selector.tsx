"use client";

import { useState } from "react";
import { motorcycles as allMotorcycles } from "@/data/motorcycles";
import { useCompareStore } from "@/store/use-compare-store";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

export function MotorcycleSelector() {
  const [open, setOpen] = useState(false);
  const { motorcycles: selectedMotorcycles, addMotorcycle } = useCompareStore();

  const availableMotorcycles = allMotorcycles.filter(
    (m) => !selectedMotorcycles.find((sm) => sm.id === m.id)
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full md:w-[300px] justify-between"
        >
          <span className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> Add to compare
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="end">
        <Command>
          <CommandInput placeholder="Search motorcycles..." />
          <CommandList>
            <CommandEmpty>No motorcycle found.</CommandEmpty>
            <CommandGroup>
              {availableMotorcycles.map((motorcycle) => (
                <CommandItem
                  key={motorcycle.id}
                  value={motorcycle.name}
                  onSelect={() => {
                    addMotorcycle(motorcycle);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 py-3"
                >
                  <div className="relative h-10 w-16 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={motorcycle.thumbnail}
                      alt={motorcycle.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{motorcycle.name}</span>
                    <span className="text-xs text-muted-foreground">{motorcycle.brand}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
