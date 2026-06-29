"use client";

import { Motorcycle } from "@/types";
import { MotorcycleCard } from "@/components/listing/motorcycle-card";

interface RelatedProductsProps {
  products: Motorcycle[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-12 mt-12 border-t border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Similar Motorcycles</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <MotorcycleCard key={product.id} motorcycle={product} />
        ))}
      </div>
    </section>
  );
}
