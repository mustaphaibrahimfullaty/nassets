"use client";

import { useCompareStore } from "@/store/use-compare-store";
import { CompareTable } from "@/components/compare/compare-table";
import { MotorcycleSelector } from "@/components/compare/motorcycle-selector";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/ui/empty";
import { Link } from "lucide-react"; // Wait, using Next Link below

export default function ComparePage() {
  const { motorcycles, clearCompare } = useCompareStore();

  return (
    <div className="container py-10 px-4 md:px-8 max-w-7xl mx-auto min-h-[calc(100vh-200px)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 animate-fade-in-up">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Compare <span className="gradient-text">Motorcycles</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            See how different models stack up against each other. Compare specs, range, and pricing side-by-side.
          </p>
        </div>
        {motorcycles.length > 0 && (
          <Button variant="outline" onClick={clearCompare}>
            Clear All
          </Button>
        )}
      </div>

      <div className="animate-fade-in-up-delay-1">
        {motorcycles.length === 0 ? (
          <Empty className="py-20 border border-dashed border-border/50 rounded-2xl bg-card/20">
            <h3 className="text-xl font-bold mb-2">No motorcycles selected</h3>
            <p className="text-muted-foreground mb-6">
              Add up to 4 motorcycles to compare their specifications.
            </p>
            <MotorcycleSelector />
          </Empty>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex justify-end">
              {motorcycles.length < 4 && (
                <div className="w-full md:w-auto">
                  <MotorcycleSelector />
                </div>
              )}
            </div>
            <CompareTable motorcycles={motorcycles} />
          </div>
        )}
      </div>
    </div>
  );
}
