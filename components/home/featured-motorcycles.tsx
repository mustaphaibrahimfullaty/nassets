import Link from "next/link";
import { getFeaturedMotorcycles } from "@/services/motorcycle-service";
import { MotorcycleCard } from "./motorcycle-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export async function FeaturedMotorcycles() {
  const motorcycles = await getFeaturedMotorcycles();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
              Featured <span className="text-primary">Models</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our handpicked selection of premium electric motorcycles, representing the pinnacle of performance and design.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center group hover:bg-transparent hover:text-primary" asChild>
            <Link href="/motorcycles">
              View All Models
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {motorcycles.slice(0, 3).map((motorcycle) => (
            <div key={motorcycle.id} className="animate-fade-in-up" style={{ animationFillMode: 'both' }}>
              <MotorcycleCard motorcycle={motorcycle} />
            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Button variant="outline" className="w-full rounded-full" asChild>
            <Link href="/motorcycles">
              View All Models
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
