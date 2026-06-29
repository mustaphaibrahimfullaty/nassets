"use client";

import { useState, useMemo } from "react";
import { motorcycles } from "@/data/motorcycles";
import { categories as mockCategories } from "@/data/categories";
import { MotorcycleCard } from "@/components/listing/motorcycle-card";
import { FiltersSidebar, FilterState } from "@/components/listing/filters-sidebar";
import { SortSelect, SortOption } from "@/components/listing/sort-select";
import { MotorcycleCategory } from "@/types";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";

export default function MotorcyclesPage() {
  const maxPrice = Math.max(...motorcycles.map((m) => m.price)) + 5000;
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, maxPrice],
    brands: [],
  });
  const [sort, setSort] = useState<SortOption>("featured");

  // Derive available categories from the mock data
  const availableCategories = mockCategories.map((c) => ({
    label: c.name,
    value: c.slug as MotorcycleCategory,
    count: motorcycles.filter((m) => m.category === c.slug).length,
  })).filter((c) => c.count > 0);

  // Derive available brands from the mock data
  const brandCounts = motorcycles.reduce((acc, mc) => {
    acc[mc.brand] = (acc[mc.brand] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const availableBrands = Object.entries(brandCounts).map(([brand, count]) => ({
    label: brand,
    value: brand,
    count,
  }));

  // Filter & Sort Logic
  const filteredMotorcycles = useMemo(() => {
    let result = motorcycles.filter((mc) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(mc.category)) {
        return false;
      }
      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(mc.brand)) {
        return false;
      }
      // Price filter
      if (mc.price < filters.priceRange[0] || mc.price > filters.priceRange[1]) {
        return false;
      }
      return true;
    });

    // Sorting
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [filters, sort]);

  return (
    <div className="container py-10 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col mb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Discover <span className="gradient-text">Electric Motorcycles</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Browse our entire catalog of premium electric motorcycles. Filter by category, range, and price to find your perfect ride.
        </p>
      </div>

      <div className="w-full">
        <main className="w-full animate-fade-in-up-delay-1">
          <div className="mb-6 bg-card/30 backdrop-blur-sm p-4 rounded-xl border border-border/50">
            <SortSelect
              value={sort}
              onChange={setSort}
              resultsCount={filteredMotorcycles.length}
              filterTrigger={
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="flex gap-2">
                      <Filter className="w-4 h-4" />
                      <span className="hidden sm:inline">Filters</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto p-6 pt-12">
                    <FiltersSidebar
                      filters={filters}
                      setFilters={setFilters}
                      availableCategories={availableCategories}
                      availableBrands={availableBrands}
                      maxPrice={maxPrice}
                    />
                  </SheetContent>
                </Sheet>
              }
            />
          </div>

          {filteredMotorcycles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-card/20 rounded-2xl border border-border/50 border-dashed">
              <div className="w-16 h-16 mb-4 rounded-full bg-muted flex items-center justify-center">
                <Filter className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">No motorcycles found</h3>
              <p className="text-muted-foreground max-w-md">
                We couldn't find any motorcycles matching your current filters. Try adjusting your search criteria.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setFilters({ categories: [], priceRange: [0, maxPrice], brands: [] })}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMotorcycles.map((mc) => (
                <MotorcycleCard key={mc.id} motorcycle={mc} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
