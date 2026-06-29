"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ReactNode } from "react";

export type SortOption = "featured" | "newest" | "price-asc" | "price-desc" | "rating";

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  resultsCount: number;
  filterTrigger?: ReactNode;
}

export function SortSelect({ value, onChange, resultsCount, filterTrigger }: SortSelectProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-4">
        {filterTrigger}
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{resultsCount}</span> results
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground shrink-0 hidden sm:inline-block">Sort by:</span>
        <Select value={value} onValueChange={(val) => onChange(val as SortOption)}>
          <SelectTrigger className="w-full sm:w-[180px] h-9 bg-card border-border/50 hover:border-primary/50 transition-colors">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="newest">Newest Arrivals</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating">Top Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
