import Link from "next/link";
import { getAllCategories } from "@/services/motorcycle-service";
import { Gauge, Wind, Mountain, Building2, MapPin, TreePine, ArrowRight } from "lucide-react";

export async function CategoriesSection() {
  const categories = await getAllCategories();

  // Helper to map string icon names to Lucide components
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Gauge": return <Gauge className="w-8 h-8" />;
      case "Wind": return <Wind className="w-8 h-8" />;
      case "Mountain": return <Mountain className="w-8 h-8" />;
      case "Building2": return <Building2 className="w-8 h-8" />;
      case "MapPin": return <MapPin className="w-8 h-8" />;
      case "TreePine": return <TreePine className="w-8 h-8" />;
      default: return <ArrowRight className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
            Find Your <span className="text-primary">Ride</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you are carving canyons or commuting downtown, we have the perfect electric motorcycle for your journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/motorcycles?category=${category.slug}`}
              className="group flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {getCategoryIcon(category.iconName)}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.motorcycleCount} Models
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
