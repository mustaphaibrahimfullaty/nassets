"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotorcycleCategory } from "@/types";

import { formatPrice } from "@/services/motorcycle-service";

export interface FilterState {
  categories: MotorcycleCategory[];
  priceRange: [number, number];
  brands: string[];
}

interface FiltersSidebarProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  availableCategories: { label: string; value: MotorcycleCategory; count: number }[];
  availableBrands: { label: string; value: string; count: number }[];
  maxPrice: number;
}

export function FiltersSidebar({
  filters,
  setFilters,
  availableCategories,
  availableBrands,
  maxPrice,
}: FiltersSidebarProps) {
  const handleCategoryChange = (category: MotorcycleCategory, checked: boolean) => {
    setFilters({
      ...filters,
      categories: checked
        ? [...filters.categories, category]
        : filters.categories.filter((c) => c !== category),
    });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    setFilters({
      ...filters,
      brands: checked
        ? [...filters.brands, brand]
        : filters.brands.filter((b) => b !== brand),
    });
  };

  const handlePriceChange = (value: number[]) => {
    setFilters({
      ...filters,
      priceRange: [value[0], value[1]] as [number, number],
    });
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, maxPrice],
      brands: [],
    });
  };

  const activeFiltersCount =
    filters.categories.length + filters.brands.length + (filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice ? 1 : 0);

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold tracking-tight">Filters</h3>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 px-2 text-muted-foreground hover:text-foreground">
            Clear all
          </Button>
        )}
      </div>

      <Accordion type="multiple" defaultValue={["category", "price", "brand"]} className="w-full">
        <AccordionItem value="category" className="border-border/50">
          <AccordionTrigger className="hover:no-underline hover:text-primary transition-colors py-4">
            <span className="font-semibold text-sm">Category</span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="space-y-3">
              {availableCategories.map((category) => (
                <div key={category.value} className="flex items-center justify-between group">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.value}`}
                      checked={filters.categories.includes(category.value)}
                      onCheckedChange={(checked) => handleCategoryChange(category.value, checked as boolean)}
                      className="border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label
                      htmlFor={`category-${category.value}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer group-hover:text-primary transition-colors"
                    >
                      {category.label}
                    </Label>
                  </div>
                  <Badge variant="secondary" className="bg-muted/50 text-muted-foreground font-normal text-xs px-1.5 py-0">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border-border/50">
          <AccordionTrigger className="hover:no-underline hover:text-primary transition-colors py-4">
            <span className="font-semibold text-sm">Price Range</span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 px-1">
            <Slider
              defaultValue={[0, maxPrice]}
              value={[filters.priceRange[0], filters.priceRange[1]]}
              max={maxPrice}
              step={50000}
              onValueChange={handlePriceChange}
              className="mt-6"
            />
            <div className="flex items-center justify-between mt-4 text-xs font-medium text-muted-foreground">
              <span>{formatPrice(filters.priceRange[0])}</span>
              <span>{formatPrice(filters.priceRange[1])}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand" className="border-border/50">
          <AccordionTrigger className="hover:no-underline hover:text-primary transition-colors py-4">
            <span className="font-semibold text-sm">Brand</span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="space-y-3">
              {availableBrands.map((brand) => (
                <div key={brand.value} className="flex items-center justify-between group">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand.value}`}
                      checked={filters.brands.includes(brand.value)}
                      onCheckedChange={(checked) => handleBrandChange(brand.value, checked as boolean)}
                      className="border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label
                      htmlFor={`brand-${brand.value}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer group-hover:text-primary transition-colors"
                    >
                      {brand.label}
                    </Label>
                  </div>
                  <Badge variant="secondary" className="bg-muted/50 text-muted-foreground font-normal text-xs px-1.5 py-0">
                    {brand.count}
                  </Badge>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
